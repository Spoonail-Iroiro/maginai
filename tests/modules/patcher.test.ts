import { describe, expect, test } from 'vitest';
import { versionToversionInfo } from '@/modules/util.js';
import { Patcher } from '@/modules/patcher.js';

test('patch method by Patcher', () => {
  const patcher = new Patcher();

  class CaseClass {
    value: number;
    constructor() {
      this.value = 2;
    }

    showAndReturnAdd(addValue: number) {
      const rtn = this.value + addValue;
      return rtn;
    }

    subMethod() {
      return 'sub';
    }
  }

  const caseObj = new CaseClass();
  const origMethod = caseObj.showAndReturnAdd;

  patcher.patchMethod(CaseClass, 'showAndReturnAdd', (origMethod) => {
    const rtnFn = function (this: CaseClass, ...args: any[]) {
      const patchValue = 4;
      args[0] += patchValue;
      let rtn = origMethod.call(this, ...args);
      return [rtn, this.subMethod()];
    };
    return rtnFn;
  });

  const patchRtn = caseObj.showAndReturnAdd(3) as any;
  patchRtn[0].should.be.equal(9); // 4 + 3 + 2
  patchRtn[1].should.be.equal('sub');
  // @ts-ignore
  CaseClass.prototype['__maginai__showAndReturnAdd'].should.be.equal(
    origMethod
  );
});
