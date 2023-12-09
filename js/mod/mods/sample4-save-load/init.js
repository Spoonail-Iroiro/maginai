// import { Maginai } from '../../modules/maginai.js';
// const maginai = new Maginai();

// セーブ回数をカウントするmod
(function () {
  let saveCount;
  const logger = maginai.logging.getLogger('sample4');
  // タイプ数削減のためサブモジュールを変数に格納
  const sv = maginai.modSave;
  const ev = maginai.events;

  // セーブデータのロード完了時に…
  ev.saveLoaded.addHandler(() => {
    // getSaveObjectで現在読み込んでいるセーブデータ内の`sample4`のセーブオブジェクトを取得
    const saveObj = sv.getSaveObject('sample4');
    if (saveObj === undefined) {
      // `sample4`のセーブオブジェクトが存在しない場合undefinedが返されるので、saveCountの初期値0をセット
      saveCount = 0;
    } else {
      // セーブオブジェクトが存在すればその中のsaveCountをセット
      saveCount = saveObj.saveCount;
    }
    // ログにセーブから読み込んだsaveCountを表示
    logger.info(
      `セーブオブジェクトがロードされました。saveCount:` + saveCount.toString()
    );
  });

  // セーブデータ書き込み直前に…
  ev.saveObjectRequired.addHandler(() => {
    // saveCountを+1
    saveCount += 1;

    // `sample4`のセーブオブジェクトとして、オブジェクトにsaveCountを含めてセット
    sv.setSaveObject('sample4', { saveCount });
    logger.info(`セーブがセットされました`);
  });
})();
