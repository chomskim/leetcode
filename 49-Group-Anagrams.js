/**
 * @desc 49. Group Anagrams
 * @param strs {string[]}
 * @returns {string[][]}
 */
function groupAnagrams(strs) {
    function strToFreqMap(str) {
        const freq = {};
        let slist = [...str];
        slist.forEach((ch) => {
            if (freq[ch] || freq[ch] === 0) {
                freq[ch] += 1;
            }
            else {
                freq[ch] = 1;
            }
        });
        const res = Object.keys(freq)
            .sort()
            .reduce((sor, key) => {
            sor[key] = freq[key];
            return sor;
        }, {});
        return res;
    }
    const freqKeyMap = {};
    strs.forEach((str, i) => {
        const fkey = JSON.stringify(strToFreqMap(str));
        if (freqKeyMap[fkey]) {
            freqKeyMap[fkey].push(i);
        }
        else {
            freqKeyMap[fkey] = [i];
        }
    });
    const res = Object.keys(freqKeyMap).map((fkey) => freqKeyMap[fkey].map((ind) => strs[ind]));
    return res;
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
