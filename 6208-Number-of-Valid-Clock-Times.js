/**
 * @desc 6208. Number of Valid Clock Times
 * @param time
 */
function countTime(time) {
    let res = 1;
    let c1 = time.charAt(0) === '?' ? (parseInt(time.charAt(1)) <= 3 ? 3 : 2) : 1;
    let c2 = time.charAt(1) === '?' ? (parseInt(time.charAt(0)) <= 1 ? 10 : 4) : 1;
    res = time.charAt(0) === '?' && time.charAt(1) === '?' ? 24 : c1 * c2;
    let c3 = time.charAt(3) === '?' ? 6 : 1;
    let c4 = time.charAt(4) === '?' ? 10 : 1;
    res = res * c3 * c4;
    return res;
}
console.log(countTime('2?:??'));
