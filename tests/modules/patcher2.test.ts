import { describe, expect, test } from 'vitest';
import { versionToversionInfo } from '@/modules/util.js';
import { Patcher2 } from '@/modules/patcher2.js';

test('patch method by Patcher2', () => {
  const patcher2 = new Patcher2();

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

  patcher2.patchMethod(
    CaseClass,
    'showAndReturnAdd',
    (self, original, args) => {
      const patchValue = 4;
      args[0] += patchValue;
      const rtn = original(...args);
      return [rtn, self.subMethod()];
    },
  );

  const patchRtn = caseObj.showAndReturnAdd(3) as any;
  patchRtn[0].should.be.equal(9); // 4 + 3 + 2
  patchRtn[1].should.be.equal('sub');
  // @ts-expect-error Assertion for saved original method
  CaseClass.prototype['__maginai__showAndReturnAdd'].should.be.equal(
    origMethod,
  );
});
