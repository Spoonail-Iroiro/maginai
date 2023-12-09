※右上のハンバーガーボタンから目次を出せます

# 最もシンプルなMod
Mod名を決めその名前のフォルダを作り、その中に`init.js`ファイルを作成します。  
例として`mysample`というModにしてみます。
```text
mysample/
┗━━init.js
```

```js
//init.js
console.log("Hello, world!");
```

この`mysample`フォルダをMod導入手順に従って`mods`に配置、`load_mods.js`でロード対象に追加すればModとしてロードされます。  
今回は`console.log`でブラウザの開発者コンソールへメッセージを出力しましたので、`index.html`からゲームを起動し、開発者コンソールを開いてみます。  

![mysample-hello](docassets/mysample-hello.png)

`init.js`内のコードが実行され、メッセージが表示されていることがわかると思います。  
また、`init.js`に書いたコードが実行されるのはModロード中、ゲームロード前のタイミングということがわかります。  

おめでとうございます！初めてのModができました。

# ゲームに影響を与える
これだけではせっかくのModなのにゲーム内に何も影響を与えていませんね。  
ゲームを変更するコードを全部自分で書いてもいいのですが、maginaiはいくつか便利な仕組みを提供します。  
maginaiが提供するメソッドやモジュールはModのコード内ならいつでも`maginai`グローバル変数からアクセスできます。  

## わかる人向け
すでにゲームを改変するコードを書いている方向けの説明です。

ゲーム本体`union.js`とmaginaiのエントリポイント`loader.js`、Modの`init.js`、およびmaginaiが提供するイベントの実行順は以下の通りになります  
1. `union.js`の実行（ゲーム本体のスクリプト）
2. `loader.js`の実行（maginaiの本体スクリプト）
3. あるModの`init.js`
4. あるModのPostprocess（非同期処理が完了するまで次のModの3に進まない）
5. （`mods_load.js`にあるすべてのModを読み込むまで3と4を繰り返し）
6. `tWgm = new tGameMain({});`
7. `tWgmLoaded`イベント
8. `gameLoadFinished`イベント（タイトル画面表示直前）
9. タイトル画面表示
10. （ユーザーがセーブを選択）
11. `saveLoaded`イベント

Modがゲームを変更するコードを書く場所は主に以下の通りになるかと思います。  
- メソッドの変更…`init.js`に直接
    - Modの`init.js`の読み込み時点ですでに`union.js`は実行されクラスなどは定義済のため変更可能です
- 非同期でロードが必要なデータ…Postprocessに登録
    - `maginai.setModPostprocess`で`Promise`をセットします（後述）
- データの変更…`gameLoadFinished`イベント（後述）
    - タイトル画面表示直前で、`tWgm`のメンバーである`tGameTalkResource`等の各クラスのインスタンス化・初期化が完了しているため会話データ等の変更が可能です
- セーブデータ読み込み後…`saveLoaded`イベント（後述）
    - セーブデータを選択後読み込みが終了し操作可能になる直前のため、個別のセーブデータにアクセスする変更が可能です

### Postprocess
`init.js`に書けるのは同期コードだけになるので、非同期処理を次のModのロードの前（かつ、ゲームのロード前）に完了するにはmaginaiが提供するPostprocess機能を使用します。  
`maginai.setModPostprocess`を`Promise`オブジェクトを引数に呼び出すことで、その`Promise`が完了するまで次のModは読み込まれません。  

```js
// init.js
// ...
// ロードしたメッセージを格納する変数
let message;

// メッセージを外部jsファイルからロード
const postprocess = maginai
  .loadJsData("./js/mod/mods/buildsample/message.js") // Promiseが返される
  .then((loaded) => {
    // ロードしたメッセージを変数にセット
    message = loaded["message"];
  });
// メッセージのロードがゲームロードの前（および次のModのロード前）に確実に終わるPostprocessとなるように
// setModPostprocessでPromiseをセット
maginai.setModPostprocess(postprocess);
// ※複数のPromiseをPostprocessとしてセットしたい場合はPromise.allを使用したりthenでチェインして一つのPromiseにした状態でセットする必要あり
// ...
```

### イベント
`maginai.events`下にはゲーム中の特定のタイミングで実行されるイベントが定義されています。  
`addHandler`メソッドを呼び出しイベントハンドラーとなる関数を登録することで実行されます。  

```js
// init.js
// ...
// ゲームのロードが完了したときにメッセージを表示するイベントハンドラーを登録
maginai.events.gameLoadFinished.addHandler(() => {
  logMessage(message);
});
// ...
```

すべてのイベントは以下に掲載されています。  
https://spoonail-iroiro.github.io/maginai/classes/_internal_.MaginaiEvents.html

## はじめての人向け
まだModとか作ってないよという方向けの説明です。  
（とはいえ、ゲームの中身の理解はどうしても必要になるのですが）

### ロードされたデータを変更する
キャラの会話データやアイテムのマスタデータ等を差し替えることで、ゲーム中の動作を変更できます。  

ここで注意としては、`init.js`が読み込まれるのはModのロード中で、ゲームのロード前であることです。  
`init.js`にデータの差し替え処理を書いてもまだ差し替えるべきデータが読み込まれていないのでエラーとなります。  

このような場合、`maginai.events`に定義されている`gameLoadFinished`イベントを使います。  
`maginai.events`下には`addHandler`メソッドでハンドラーを登録できる様々なイベントオブジェクトがあり、`gameLoadFinished`は**ゲームのロードが完了し各種データが読み込まれたとき**に発生するイベントになっています。  

以下はセーブを選んでゲーム開始した時の「ロードしました。」メッセージを「Hello, World!」に差し替える`init.js`の例です。
```js
(function () {
  // init.js
  // 名前の短縮のため変数に代入
  const ev = maginai.events;

  // ゲームのロードが終了しタイトル画面が表示されるときに…
  ev.gameLoadFinished.addHandler(() => {
    // 〜.load_okがセーブロード時の「ロードしました。」なので、これを差し替え
    tWgm.tGameTalkResource.talkData.system.load_ok = "Hello, World!";
  });
})();
```

#### ※`(function(){`〜`})();`は何？
IIFEというもので、`init.js`のようなスクリプトファイルで他のスクリプトと変数が干渉しないようにする書き方です。  
よくわからなければModのコードは基本`(function(){`〜`})();`を書いてからその間に書くものとしてください。  


### メソッドの動作を変更する
各種メソッドをModで定義したメソッドに差し替える（モンキーパッチ）で動作を変更できます。  

maginaiではこのための便利なメソッドとして`maginai.patcher`の`patchMethod`メソッドを用意しています。
ゲーム内ログ出力メソッドである、`tGameLog.addLog`メソッドにパッチして、ゲームロード時の「ロードしました。」ログを「Hello, World!」に変更する`init.js`は以下のとおりになります。

```js
// init.js
(function () {
  // 名前の短縮のため変数に代入
  const pt = maginai.patcher;

  // tGameLogクラスのaddLogメソッドにパッチ
  // 第三引数のnewMethodFactoryに引数で渡されるorigMethod＝もともとのaddLogメソッド
  pt.patchMethod(tGameLog, "addLog", (origMethod) => {
    // 新しいaddLogメソッドは…
    const rtnFn = function (message, ...args) {
      // 第一引数で渡されるメッセージが、"ロードしました。"なら"Hello, World"に置換する
      const newMessage = message.replace("ロードしました。", "Hello, World!");
      // 置換後のメッセージでもともとのaddLogを呼び出す
      origMethod.call(this, newMessage, ...args);
    };
    return rtnFn;
  });
})();
```

少しややこしいですが、patchMethodは  

- 第一引数が対象クラス
- 第二引数がメソッド名
- 第三引数は新しいメソッド（今回の場合新しい`addLog`となるメソッド）を返す関数

となります。  
第三引数の関数は引数でパッチ前のメソッドorigMethodが渡されるので、内部で`origMethod.call(this, ...`とすることでもともとのメソッドを呼び出すことができます。  
引数の一部だけ加工・前処理や後処理だけ記述するといったことが可能です。  

### 外部データを読み込む
Modユーザーが内容を改変できる部分がある場合、`init.js`を直接編集させるのではなく、外部ファイルを用意したほうがいいでしょう。  
[こちらの例](#postprocess)はファイル読み込みの処理例になっています。

注意点としてファイルパスは`index.html`からの相対パスである必要があります。  
よって、例えばModフォルダ直下に入れたファイルは./js/mod/mods/<Mod名>/<ファイル名>`といったパスになります。

## 欲しい機能の実現が難しい場合
お気軽に作者までご相談ください。  
Modの実装ケースには対応したつもりですが、考慮漏れがあるかもしれません。  
（連絡先は`README.md`トップにあります）

## 作成例
Mod導入手順にあるsample Modや、この作例リポジトリのModコード等を例として使用できます。  

https://github.com/Spoonail-Iroiro/maginai-buildsample

また、この作例リポジトリはESModuleで実装しビルドでMod用スクリプトに変換する構成の例にもなっています。  

# `maginai` API
`maginai`が公開するすべての機能のドキュメントは以下で公開されています。  
[maginai APIドキュメント](https://spoonail-iroiro.github.io/maginai/classes/_internal_.Maginai.html)  
※`Internal`マークがついてるものは内部用でModからの利用は想定されていません  

`maginai`は実際には`Maginai`クラスインスタンスですので`Maginai`クラス下に公開されているものを使用できます。  

よく使用されると思われる機能は以下です。  
（ここまでに紹介した基本機能系は省略）  
詳細はドキュメントを参照してください。  
- `loadJsData` - `var LOADDATA = ...`形式のjsファイルからデータを読み込む
- `logToInGameLogDebug` - ゲーム内ログにログ出力（デバッグ・エラー表示用）
- `VERSION`, `VERSION_INFO` - `maginai`のバージョン情報
  - ※v0.2.0では存在しないプロパティのため比較の際は注意して下さい
- `modSave` - Mod用セーブデータ読み込み/書き込み用サブモジュール
  - セーブロード直後イベント`saveLoaded`、セーブ直前イベント`saveObjectRequired`と合わせて使用し、セーブデータにMod用データを読み書きすることが可能


# 実装における注意事項
動作するModを実装するにはここまで説明した通りで問題ありませんが  
ユーザーフレンドリーなModとするため、あるいはmaginaiの制約によりにいくつか注意事項があります。  

## ログはconsole.logではなくloggerを取得して使う
いくつかの例ではわかりやすさのため`console.log`でログ出力していますが、実際のModコードでは非推奨です。  
かわりに以下に掲載の例の通り、`Logger`オブジェクトを取得してログ出力を行ってください。  

[https://spoonail-iroiro.github.io/maginai/classes/_internal_.Maginai.html#logging](https://spoonail-iroiro.github.io/maginai/classes/_internal_.Maginai.html#logging)

loggerを使うことでどのModからのログなのかわかりやすく、ユーザーが表示レベル等を制御できます。  

![logger-log](docassets/log-with-logger.png)

## `init.js`コードはIIFEで実行
はじめての人向けにも書きましたが、`init.js`はIIFEで実行するようにしてください。  
IIFEでなくグローバルに書いた場合、たとえば同じ`const hoge`という変数を使用するModが複数ロードされると、後にロードされるModは失敗します。  

※`const`や`let`はブロックスコープを作りますが、`var`が紛れ込まない保証はないことと、モジュールによるスコープ制限が利用できないためIIFEを推奨します  
## `tGameMain`クラスはそのまま使用できない
`tGameMain`クラスはゲーム初期化を遅らせるためダミーになっており直接使用できません。  
メソッドのパッチなどでアクセスしたい場合は以下に記載の通りとしてください。  
https://spoonail-iroiro.github.io/maginai/classes/_internal_.Maginai.html#origtGameMain

## Mod名は重複しない特徴的なものを付けるようにする
Modはフォルダで導入するため同じMod名で別のModを入れることはできません。  
また外部ファイルを読み込むModの場合、今のところ参照先を抽象化する機能がなく、Modフォルダ名を変えると動作しなくなります。  
（アップデートで改善する可能性があります）  
他と被りにくい名前を付けるようにしましょう。  

# Q&A

## Q. ESModuleで実装はできないの？
ローカルhtml+javascriptで動作する異世界の創造者はそのままではCORS制約によりESModuleのロードができません。  
具体的には`<script type="module">`での読み込みやスクリプト内での動的`import`等はエラーになります。  

ESModuleで実装したい場合はRollup（を使用するvite）等でスクリプト（`iife`ライブラリ）へビルドする必要があります。  
以下に構成例がありますので参考にしてください。  
https://github.com/Spoonail-Iroiro/maginai-buildsample  
※コピーして自分のModを作成する場合は各種設定の`buildsample`を自分のMod名に置換してください  

## Q. `maginai`の型定義はないの？
```sh
npm install maginai
```

でインストール可能です。  
（現在型のみのためテスト等ではmockする必要があります）  

### グローバル変数として参照する場合
`moduleResolution`が`Node16`または`Bundler`のtypescriptプロジェクトにおいて、以下の内容の型定義ファイルをプロジェクトに含めることでグローバル変数maginaiの型定義をすることができます。
```ts
declare var maginai: import('maginai/maginai.js').Maginai;
```

`moduleResolution`が上記以外のプロジェクトにおいても以下のようにして同様に型定義可能ですが、内部モジュール構成については今後変更の可能性もあるため非推奨です。

```ts
declare var maginai: import('maginai/lib/modules/maginai.js').Maginai;
```

### importで参照する場合
ビルド・バンドルを行う構成の場合、ソースでは以下のようにimportでmaginaiモジュールを参照し、ビルド後はバンドルに含まずグローバル変数として参照するよう設定を行うことができます。
```js
import maginai from 'maginai';

maginai.events.tWgmLoaded.addHandler(...
```

ビルド後はバンドルに含まずグローバル変数として参照する設定については、以下の作例でviteにおいてそのように設定していますので参考にしてください。  
https://github.com/Spoonail-Iroiro/maginai-buildsample  

### `maginai.events`のハンドラー型が表示されない
現在準備中です。  
JSDocにはハンドラーへの引数の型を記載していますので参考にして下さい。  

### `maginai.logging`の型が表示されない
現在準備中です。  
基本的には案内の通り`getLogger`でloggerの取得と`logger.info`等でのログのみ使用してください。

## Q. `union.js`の型はないの？
パッケージ`maginai-game-types`としてインストール可能です。  
詳細は以下リポジトリreadmeを参照下さい。  
https://github.com/Spoonail-Iroiro/maginai-game-types

## Q. async functionは使えないの？
使用できます。  
async functionが返すのが`Promise`のため、これをPostprocessとして登録してください（登録方法は上部で解説しています）  

※モジュールではないため`init.js`でのtop-level awaitはエラーとなります  
