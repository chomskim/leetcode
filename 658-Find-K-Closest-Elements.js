/**
 * @desc 658. Find K Closest Elements
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @returns {number[]} the k closest integers to x in the array arr
 */
function findClosestElements(arr, k, x) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        if (i < k) {
            res.push(arr[i]);
        }
    }
    let fp = k;
    while (fp < arr.length) {
        if (Math.abs(x - res[0]) > Math.abs(x - arr[fp])) {
            res.shift();
            res.push(arr[fp]);
        }
        fp += 1;
    }
    return res;
}
console.log(findClosestElements([1, 2, 3, 4, 4], 4, 3));
