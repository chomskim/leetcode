/**
 * @desc 6192. Number of Common Factors
 * @param {*} a
 * @param {*} b
 */
function commonFactors(a, b) {
    if (a > b) {
        ;
        [a, b] = [b, a];
    }
    let res = 0;
    for (let i = 1; i <= a; ++i) {
        if (a % i === 0 && b % i === 0)
            res += 1;
    }
    return res;
}
