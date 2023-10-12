## はじめに

maginaiの開発に興味をもっていただきありがとうございます！  

現時点ではあまり強い制限やルールなく受け付けていこうと思っています。  
コードやドキュメントの改善に関しても、かならずPRやissueをたてなければいけないというわけではなく  
ここが動かなかった！こうしたら動いた！といった断片情報でもお気軽に以下窓口から連絡いただければ幸いです。  

Discord:いせそうDiscordの改造・MOD用チャンネルでで@Spoonailまでメンションください  
Misskey:https://misskey.io/@Spoonail  

もちろん、issueともし修正があればそれに紐付けたPRを作成いただければ作業しやすく助かります。  

## Development

### Requirement

Node.js v18以上

動作確認済開発環境：
Ubuntu 22.04 LTS

### Install and Dev Build

リポジトリのclone後、異世界の創造者フォルダを`game/`としてコピー  

```text
./
├── types
│   └── maginai-images.d.ts
├── CONTRIBUTION.md
├── README.md
├── game
│   ├── Game.exe
│   ├── Game.exe.config
│   ├── game
│   ├── libs
│   ├── ★はじめにお読みください.txt
│   ├── ★更新内容.txt
│   ...
```

```sh
npm install
```

以下でMODローダーのビルド  

```
npm run dev
```

`game/js/mod`に出力されるため、そのままゲームを起動して動作確認可能  


### Branches
- `develop` 
  - 開発ブランチ
  - PRはこちら宛に
- `master`
  - リリースブランチ
  - `develop`からのPRでのみ更新
- `gh-pages`
  - [ドキュメント](https://spoonail-iroiro.github.io/maginai/)GitHub Pages用
  - Actionsにより自動更新

### Test
vitestを使用  
`tests`フォルダ下のテスト対象の`*.test.ts`をテストコードとする  
階層は`js/mod`をルートとしてテスト対象と対応するように（例えば`js/mod/modules/maginai.ts`のテストなら`tests/modules/maginai.test.ts`）  

### Release
※作業は基本Spoonailが行います

- `npm run bump-version:{major/minor/patch}`でversion更新 
- `develop`->`master`へ[release PR](https://github.com/spoonail-iroiro/maginai/compare/master...develop?quick_pull=1&template=release.md&title=Release:+vX.Y.Z)を作成
  - タイトルは`Release: vX.Y.Z`
- PRの各種チェックに合格したら`master`へmerge
  - Actionsによりrelease draftの作成
- 作成されたdraftを確認、changelogの生成と必要なら変更
  - 配布バイナリの添付とバージョン番号タグは自動
- releaseを確定
  - Actionsによりtypedocドキュメント生成、`gh-pages`へのpush
  - Actionsにより`npm publish`

### Scripts

#### 型定義パッケージのビルド
```
npm run build:package
```

`libs/`下にMOD開発用パッケージ用の型定義出力  

#### 配布zipのビルド
```
npm run build:dist
```

`dist/`下に配布zip出力  
`dist/maginai/`フォルダがzipの内容  

#### ドキュメント
```
npm run preview:docs
```
外部モジュールを除いたドキュメントのビルド  
開発中の確認は基本これで  

```
npm run build:docs
```
すべてのページのビルド（外部モジュールまで含むため遅い）



