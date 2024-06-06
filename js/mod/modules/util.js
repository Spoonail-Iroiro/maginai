/**
 * @internal
 * human-readable `typeof`
 *
 * The returned value should not be used for conditionals or similar purposes, intended for logging output.
 *
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

/**
 * Splits the version string into `[major, minor, patch, preid, prerelease]`
 *
 * @param {string} version
 * @return {[number, number, number, string, number]} versionInfo
 */
export function versionToversionInfo(version) {
  const bodyAndPre = version.split('-');
  if (bodyAndPre.length == 0 || bodyAndPre.length >= 3) {
    throw new Error(`バージョン文字列が不正です：${version}`);
  }
  const bodyVersions = bodyAndPre[0].split('.');
  if (bodyVersions.length != 3) {
    throw new Error(`バージョン文字列が不正です：${version}`);
  }
  const info = bodyVersions.map((nstr) => parseInt(nstr, 10));
  if (bodyAndPre.length >= 2) {
    const preInfo = bodyAndPre[1].split('.');
    if (preInfo.length != 2) {
      throw new Error(
        `バージョン文字列が不正です。prereleaseに--preid指定がありません：${version}`
      );
    } else {
      info.push(preInfo[0]);
      info.push(parseInt(preInfo[1]));
    }
  } else {
    info.push(null, null);
  }

  return info;
}

export { readableTypeof };
