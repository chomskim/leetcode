/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 1
    let high = n
    let mid = n
    while (low <= high) {
      if (mid === 1) return 1
      if (!isBadVersion(mid - 1) && isBadVersion(mid)) {
        return mid
      } else if (!isBadVersion(mid)) {
        low = mid
      } else if (isBadVersion(mid)) {
        high = mid
      }
      mid = Math.floor((low + high) / 2)
    }
    return n + 1
  }
}
