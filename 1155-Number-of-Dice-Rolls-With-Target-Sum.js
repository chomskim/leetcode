/**
 * @desc 1155. Number of Dice Rolls With Target Sum
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @returns {number} the number of possible ways to roll the dice so the sum of the face-up numbers equals target
 */
function numRollsToTarget(n, k, target) {
    function nfact(n) {
        let res = 1;
        for (let i = 2; i <= n; ++i)
            res *= i;
        return res;
    }
}
