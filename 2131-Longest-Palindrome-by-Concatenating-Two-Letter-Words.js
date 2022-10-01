/**
 * @desc 2131. Longest Palindrome by Concatenating Two Letter Words
 */
function longestPalindrome(words) {
    let dbexist = false;
    let freqMap = {};
    for (let i = 0; i < words.length; ++i) {
        let key = words[i];
        if (freqMap[key]) {
            freqMap[key] += 1;
        }
        else {
            freqMap[key] = 1;
        }
    }
    console.log(freqMap);
    let dfcount = 0;
    let fkeys = Object.keys(freqMap);
    for (let i = 0; i < fkeys.length; ++i) {
        let key = fkeys[i];
        if (key.charAt(0) === key.charAt(1)) {
            if (freqMap[key] % 2 === 1)
                dbexist = true;
            dfcount += Math.floor(freqMap[key] / 2);
        }
        else if (freqMap[key]) {
            let rkey = key.charAt(1) + key.charAt(0);
            if (freqMap[rkey]) {
                console.log(key, rkey);
                dfcount += Math.min(freqMap[key], freqMap[rkey]);
                freqMap[rkey] = 0;
            }
        }
    }
    console.log(dbexist, dfcount);
    return (dbexist ? 2 : 0) + 4 * dfcount;
}
console.log(longestPalindrome(['dd', 'aa', 'bb', 'dd', 'aa', 'dd', 'bb', 'dd', 'aa', 'cc', 'bb', 'cc', 'dd', 'cc']));
