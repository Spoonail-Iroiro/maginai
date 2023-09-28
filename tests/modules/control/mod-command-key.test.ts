import {
  describe,
  test,
  vi,
  beforeEach,
  afterEach,
  should,
  SpyInstance,
} from 'vitest';
import { ModCommandKey } from '@/modules/control/mod-command-key.js';
import { applyAllLogger } from '../../test-util';

declare var tWgm: any;
declare var tGameKeyboard: any;
declare var tGameMenu: any;

interface CommandKeyClickEventArg {
  end: () => void;
  keyCode: string;
}

interface commandKeyFixture {
  arranged: {
    commandKey: ModCommandKey;
    isClickSpy: SpyInstance<unknown[], unknown>;
    viewSkillSpy: SpyInstance<unknown[], unknown>;
    setFrameActionSpy: SpyInstance<unknown[], unknown>;
  };
}

// fixture定義
const commandKeyTest = test.extend<commandKeyFixture>({
  arranged: async ({ task }, use) => {
    class tGameMenuMock {
      constructor() {}
      viewSkill() {
        tWgm.tGameRoutineMap.setFrameAction(tWgm);
        tWgm.tGameRoutineMap.isAction = false;
      }
    }

    class tGameRoutineMapMock {
      isAction = false;
      player = { isDash: false };
      setFrameAction(wgm: any) {}
      frameAction() {
        tWgm.tGameRoutineMap.isAction = true;
        if (tWgm.tGameKeyboard.isClick('command_item')) {
          this.setFrameAction(tWgm);
          tWgm.tGameRoutineMap.isAction = false;
          return;
        }

        if (tWgm.tGameKeyboard.isClick('command_ability')) {
          tWgm.tGameMenu.viewSkill();
          return;
        }

        if (tWgm.tGameKeyboard.isClick('command_miwatasu')) {
          this.setFrameAction(tWgm);
          tWgm.tGameRoutineMap.isAction = false;
          return;
        }
      }
    }

    class tGameKeyboardMock {
      clickedKeys: string[] = [];
      setKey(keys: string[]) {
        this.clickedKeys = keys;
      }
      isClick(keyCode: string) {
        return this.clickedKeys.includes(keyCode);
      }
    }

    vi.stubGlobal('tGameKeyboard', tGameKeyboardMock);
    vi.stubGlobal('tGameMenu', tGameMenuMock);

    const viewSkillSpy = vi.spyOn(tGameMenu.prototype, 'viewSkill');
    const isClickSpy = vi.spyOn(tGameKeyboard.prototype, 'isClick');

    const commandKey = new ModCommandKey();
    commandKey.init();

    const tWgmMock = {
      tGameRoutineMap: new tGameRoutineMapMock(),
      tGameKeyboard: new tGameKeyboardMock(),
      tGameMenu: new tGameMenuMock(),
    };
    vi.stubGlobal('tWgm', tWgmMock);

    const setFrameActionSpy = vi.spyOn(tWgm.tGameRoutineMap, 'setFrameAction');

    await use({
      commandKey,
      viewSkillSpy,
      isClickSpy,
      setFrameActionSpy,
    });
  },
});

beforeEach(() => {
  vi.unstubAllGlobals();
});
afterEach(() => {
  vi.unstubAllGlobals();
});

// Modコマンドキーハンドラーがすべてtrueを返さない場合
// バニラのコマンドキー処理が行われるか確認用のテストケース
const vanillaHandleDescribe = describe.each([
  {
    name: 'no handler, handle viewSkill',
    handlers: [],
    keys: ['f1', 'command_ability'],
    viewSkillCalls: 1,
    isClickLastCall: 'command_ability',
  },
  {
    name: 'only void handler, no handle viewSkill',
    handlers: [vi.fn(), vi.fn(() => false)],
    keys: ['f1', 'command_miwatasu'],
    viewSkillCalls: 0,
    isClickLastCall: 'command_miwatasu',
  },
]);

vanillaHandleDescribe(
  'With $name',
  ({ handlers, keys, viewSkillCalls, isClickLastCall }) => {
    commandKeyTest(
      'vanilla command keys should be handled as usual',
      ({
        arranged: { commandKey, viewSkillSpy, isClickSpy, setFrameActionSpy },
      }) => {
        // ハンドラーを登録
        for (const h of handlers) {
          commandKey.commandKeyClick.addHandler(h);
        }

        // keysが押されている状態でのフレーム処理をシミュレート
        tWgm.tGameKeyboard.setKey(keys);
        tWgm.tGameRoutineMap.frameAction();

        // Modコマンドキー対象のキーが1つ押されているのでハンドラーは1回呼ばれる
        // trueを返すハンドラーがないのですべてが呼ばれるはず
        for (const h of handlers) {
          h.mock.calls.length.should.be.equal(1);
        }

        // すべてのハンドラーがtrueを返さないのでバニラのコマンドキーの処理が行われるはず
        // キーに応じてviewSkillが呼ばれたか、どのキーが最後にチェックされたか、setFrameActionが1回だけ呼ばれたかを確認
        viewSkillSpy.mock.calls.length.should.be.equal(viewSkillCalls);
        isClickSpy.mock.lastCall.should.be.deep.equal([isClickLastCall]);
        setFrameActionSpy.mock.calls.length.should.be.equal(1);
      }
    );
  }
);

commandKeyTest(
  'Calls handlers and does not call original key event handler (viewSkill)',
  ({
    arranged: {
      commandKey, //
      viewSkillSpy,
      isClickSpy,
      setFrameActionSpy,
    },
  }) => {
    // handled==trueを返さないハンドラーを登録
    const hNoHandle = vi.fn((e: CommandKeyClickEventArg) => {});
    commandKey.commandKeyClick.addHandler(hNoHandle);

    // 処理を行いhandledを返すハンドラーの準備
    const modKeyFn = vi.fn(); // ハンドラーから呼び出されるMod独自のコマンドキー処理
    // f2キーが押された時に処理を行うハンドラーを登録
    commandKey.commandKeyClick.addHandler((e: CommandKeyClickEventArg) => {
      if (e.keyCode === 'f2') {
        const end = e.end;
        modKeyFn();
        // 正しく実装されたハンドラー（同期）
        // end()を呼びtrueを返す
        end();
        return true;
      }
      return false; // 何も返さないと警告が出るのでfalseを返しておく
    });

    // 本来のアビリティコマンドキーとf2キーが押された状態でのフレーム処理をシミュレート
    // ※本来のアビリティコマンドキーよりModコマンドキーのほうが優先度が高いはず
    tWgm.tGameKeyboard.setKey(['command_ability', 'f2']);
    tWgm.tGameRoutineMap.frameAction();

    // handled==trueを返さないハンドラーも呼び出されたことを確認
    hNoHandle.mock.calls.length.should.be.equal(1);
    // Modのコマンドキー処理が呼び出されていることを確認
    modKeyFn.mock.calls.length.should.be.equal(1);
    // viewSkillは呼び出されていない（"相乗り"しているアビリティ画面は開かない）ことを確認
    should().not.exist(viewSkillSpy.mock.lastCall);
    // setFrameAction（end内）は1度だけ、tWgmを引数に呼び出されたことを確認
    setFrameActionSpy.mock.calls.should.be.deep.equals([[tWgm]]);
    // isClickで判定したのは'command_ability'より前のキーと、handledされるまでのModコマンドキーのみであることを確認
    isClickSpy.mock.calls.should.be.deep.equal([
      ['command_item'], //
      ['f1'],
      ['f2'],
    ]);
  }
);

commandKeyTest(
  'With handler which does not call end(), setFrameAction is not called at all (and the game can be soft locked)',
  ({
    arranged: {
      commandKey, //
      viewSkillSpy,
      setFrameActionSpy,
    },
  }) => {
    // trueを返しているがendを呼んでいない不正なハンドラー
    const h1 = vi.fn((e: CommandKeyClickEventArg) => {
      return true;
    });
    commandKey.commandKeyClick.addHandler(h1);

    // f1キーが押された状態でのフレーム処理をシミュレート
    tWgm.tGameKeyboard.setKey(['f1']);
    tWgm.tGameRoutineMap.frameAction();

    // h1が呼び出されたことを確認
    h1.mock.calls.length.should.be.equal(1);
    // viewSkillは呼び出されていない（"相乗り"しているアビリティ画面は開かない）ことを確認
    viewSkillSpy.mock.calls.length.should.be.equal(0);
    // setFrameActionが呼び出されていないことを確認
    setFrameActionSpy.mock.calls.length.should.be.equal(0);
    // もし非同期関数等からも全くsetFrameActionが呼び出されない場合ゲームがフリーズする（ハンドラーの処理漏れ）
  }
);
