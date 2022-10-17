/**
 * @desc 1328. Break a Palindrome
 * @param palindrome : string
 * @returns {string}
 */
function breakPalindrome(palindrome) {
    if (palindrome.length <= 1)
        return '';
    let plist = [...palindrome];
    for (let i = 0; i <= Math.floor(plist.length / 2); ++i) {
        if (plist[i] !== 'a') {
            if (plist.length % 2 && i === Math.floor(plist.length / 2))
                plist[plist.length - 1] = 'b';
            else
                plist[i] = 'a';
            return plist.join('');
        }
        else if (plist.length % 2 && i === Math.floor(plist.length / 2)) {
            plist[plist.length - 1] = 'b';
            return plist.join('');
        }
    }
    plist[plist.length - 1] = 'b';
    return plist.join('');
}
