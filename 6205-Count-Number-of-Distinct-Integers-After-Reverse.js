/**
 * @desc 6205. Count Number of Distinct Integers After Reverse Operations
 * @param nums
 */
function countDistinctIntegers(nums) {
    const resSet = new Set();
    function reverseNum(num) {
        let rev = num.toString().split('').reverse().join('');
        let res = parseInt(rev);
        return res;
    }
    nums.forEach((x) => {
        resSet.add(x);
        resSet.add(reverseNum(x));
    });
    console.log(resSet);
    return resSet.size;
}
console.log(countDistinctIntegers([2, 2, 2]));
