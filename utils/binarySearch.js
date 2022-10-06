/**
 *
 * @param {number[]} ser
 * @param {number} val
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */
function binSearch(ser, val, low, high) {
    let mid = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (ser[mid] === val) {
            return mid;
        }
        else if (ser[mid] < val) {
            low = mid + 1;
        }
        else if (ser[mid] > val) {
            high = mid - 1;
        }
    }
    return -1;
}
