## はじめに

maginaiの開発に興味をもっていただきありがとうございます！  

現時点ではあまり強い制限やルールなく受け付けていこうと思っています。  
コードやドキュメントの改善に関しても、かならずPRやissueをたてなければいけないというわけではなく  
ここが動かなかった！こうしたら動いた！といった断片情報でもお気軽に以下窓口から連絡いただければ幸いです。  

Discord:いせそうDiscordの改造・MOD用チャンネルでで@Spoonailまでメンションください  
Misskey:https://misskey.io/@Spoonail  

もちろん、issueともし修正があればそれに紐付けたPRを作成いただければ作業しやすく助かります。  

## 開発

### Requirement

Node.js v18以上

動作確認済開発環境：
Ubuntu 22.04 LTS

### Install and Dev Build

リポジトリのclone後、
```sh
npm install
```

異世界の創造者フォルダの中身をすべて`game/`にコピー
```text
./
├── @types
│   └── maginai-images.d.ts
├── CONTRIBUTION.md
├── README.md
├── dist
├── game
│   ├── Game.exe
│   ├── Game.exe.config
│   ├── game
│   ├── libs
│   ├── ★はじめにお読みください.txt
│   ├── ★更新内容.txt
│   ...
```

以下でMODローダーのビルド
`game/`に配置したゲームフォルダ下に出力されるため、そのままゲームを起動して動作確認可能
```
npm run dev
```

### Build Distribution Files
```
npm run build:dist
```

`dist/`下に配布zip出力  
`dist/maginai/`フォルダがzipの内容  
`libs/`下にMOD開発用パッケージ用の型定義出力  

TODO: CI  

### Test
TODO

