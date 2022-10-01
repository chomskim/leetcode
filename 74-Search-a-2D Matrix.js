/**
 * @desc 74. Search a 2D Matrix
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
function binSearchFindRow(col0, colz, val, low, high) {
    let mid = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (col0[mid] <= val && val <= colz[mid]) {
            return mid;
        }
        else if (colz[mid] < val) {
            low = mid + 1;
        }
        else if (col0[mid] > val) {
            high = mid - 1;
        }
    }
    return -1;
}
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
function searchMatrix(matrix, target) {
    const col0 = matrix.map((row) => row[0]);
    const colz = matrix.map((row) => row[row.length - 1]);
    const rind = binSearchFindRow(col0, colz, target, 0, matrix.length - 1);
    console.log(rind);
    if (rind === -1)
        return false;
    const res = binSearch(matrix[rind], target, 0, matrix[rind].length - 1);
    if (res === -1)
        return false;
    return true;
}
console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
], 3));
