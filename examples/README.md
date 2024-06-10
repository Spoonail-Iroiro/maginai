# Examples
[English](./README_en.md) | [日本語](./README.md)

maginaiを使ったModの開発に便利なサンプルコードです。

新しいサンプルコードを追加したい場合は[Discord](https://discord.gg/RgYrD3uPZM)などでお知らせください。

各`example-*`フォルダは有効なMod本体フォルダとなっているので、Modとしてインストールできます。  
Modのインストールは[gmagina-l](https://github.com/Spoonail-Iroiro/gmaginai-l/blob/master/README_ja.md)を使用するか[手動](../INSTALL.md#modの導入)で行うことができます。

# 目次
- [Character](#character)
- [Debug](#debug)
- [Item](#item)
- [Maginai](#maginai)
- [Map](#map)
- [User Interface](#user-interface)

## Character
| Example | Description |
| --- | --- |
| [Add Enemy](./character/example-add-enemy/init.js) | ランダムな敵をマップに追加します |
| [Chara List](./character/example-chara-list/init.js) | すべてのキャラクターをコンソールに出力します |

## Debug

| Example | Description |
| --- | --- |
| [Skip Opening](./debug/example-skip-opening/init.js) | `isTest`を有効にしてオープニングをスキップします |

## Item
| Example | Description |
| --- | --- |
| [Add Item](./item/example-add-item/init.js) | プレイヤーの持ち物にアイテムを追加します |
| [Add Money](./item/example-add-money/init.js) | プレイヤーにお金を与えます |
| [Custom Item](./item/example-custom-item/init.js) | ゲームにカスタムアイテムを追加します |

## Maginai
| Example | Description |
| --- | --- |
| [Events](./maginai/example-events/init.js) | maginaiのすべてのイベントを設定します |

## Map
| Example | Description |
| --- | --- |
| [Custom Map](./map/example-custom-map/init.js) | カスタムマップを作成します |
| [Map List](./map/example-map-list/init.js) | すべてのマップをコンソールに出力します |
| [View Map](./map/example-view-map/init.js) | プレイヤーをマップ間で移動させます |

## User Interface
| Example | Description |
| --- | --- |
| [Add Log](./user-interface/example-add-log/init.js) | ゲームのログにメッセージを表示します |
| [Convert Value](./user-interface/example-convert-value/init.js) | `convertValue`の%v[]構文を使って文字列に値を埋め込みます |
