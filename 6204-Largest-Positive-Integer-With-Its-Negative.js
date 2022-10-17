/**
 * @desc 6204. Largest Positive Integer That Exists With Its Negative
 * @param nums
 */
function findMaxK(nums) {
    let valMap = {};
    let sor = nums.filter((x) => x > 0).sort((a, b) => b - a);
    console.log(sor);
    nums.forEach((x, i) => {
        valMap[x] = true;
    });
    console.log(valMap);
    for (let i = 0; i < sor.length; ++i) {
        if (valMap['-' + sor[i]])
            return sor[i];
    }
    return -1;
}
console.log(findMaxK([-37, 37, -9, 2, 47, 18, 13, -11, 9, -28]));
