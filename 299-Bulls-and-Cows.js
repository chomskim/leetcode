/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function (secret, guess) {
  function findBullCount(slist, glist) {
    let res = 0
    let i = 0
    while (i < slist.length) {
      console.log(slist[i], glist[i])
      if (slist[i] === glist[i]) {
        slist.splice(i, 1)
        glist.splice(i, 1)
        res += 1
      } else {
        i += 1
      }
    }
    return res
  }
  function findCowCount(slist, glist) {
    let freqMap = {}
    for (let i = 0; i <= 9; ++i) freqMap[i] = 0
    for (let i = 0; i < slist.length; ++i) {
      freqMap[slist[i]] += 1
    }
    let res = 0
    console.log(freqMap)
    for (let i = 0; i < glist.length; ++i) {
      if (freqMap[glist[i]] > 0) {
        res += 1
        freqMap[glist[i]] -= 1
      }
    }
    return res
  }
  const slist = secret.split('')
  const glist = guess.split('')
  console.log(slist, glist)
  const bulls = findBullCount(slist, glist)
  console.log(slist, glist)
  const cows = findCowCount(slist, glist)
  return bulls + 'A' + cows + 'B'
}
console.log(getHint('1122', '2211'))
