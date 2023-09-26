/**
 * @internal
 * typeofの人間が読めるバージョン
 * ログ出力用のため戻り値は条件分岐などに使うべきではない
 * @param {any} value
 * @returns {string}
 */
function readableTypeof(value) {
  if (value === null) {
    return 'null';
  }
  switch (typeof value) {
    case 'undefined':
      return 'undefined';
    case 'string':
      return `文字列`;
    case 'number':
      return `数値`;
    case 'boolean':
      if (value) {
        return 'true';
      } else {
        return 'false';
      }
    case 'function':
      return '関数';
    case 'object':
      if (Array.isArray(value)) {
        return '配列';
      }
      return 'オブジェクト';
    case 'symbol':
      return 'シンボル';
    case 'bigint':
      return `BigInt`;
    default:
      // ここには来ないはず
      return typeof value;
  }
}

export { readableTypeof };