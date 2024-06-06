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
  return typeof value;
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
    throw new Error(`Invalid version string: ${version}`);
  }
  const bodyVersions = bodyAndPre[0].split('.');
  if (bodyVersions.length != 3) {
    throw new Error(`Invalid version string: ${version}`);
  }
  const info = bodyVersions.map((nstr) => parseInt(nstr, 10));
  if (bodyAndPre.length >= 2) {
    const preInfo = bodyAndPre[1].split('.');
    if (preInfo.length != 2) {
      throw new Error(
        `Invalid version string. --preid is required for prerelease: ${version}`
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
