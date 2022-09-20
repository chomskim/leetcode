/**
 * @param {string[]} words
 * @return {number[][]}
 */
const palindromePairs = function (words) {
  function isPalindrome(s) {
    fp = 0
    bp = s.length - 1

    while (fp <= bp) {
      if (s.charAt(fp) != s.charAt(bp)) {
        return false
      }
      fp += 1
      bp -= 1
    }
    return true
  }

  let res = []
  const ind0 = words.findIndex((w) => w === '')
  if (ind0 >= 0) {
    for (let i = 0; i < words.length; ++i) {
      if (i !== ind0 && isPalindrome(words[i])) {
        res.push([ind0, i], [i, ind0])
      }
    }
  }

  // Filter words
  const wordInd = words.map((w, i) => [w, i])
  const revWords = words.map((w) => w.split('').reverse().join(''))
  const revWordInd = revWords.map((w, i) => [w, i])
  wordInd.sort()
  revWordInd.sort()
  // console.log(wordInd)
  // console.log(revWordInd)
  // find include pairs
  let wp = 0
  let rp = 0
  const inclPair = []
  // word included in rword
  while (wp < words.length && rp < words.length) {
    const [word, ind] = wordInd[wp]
    const [rword, rind] = revWordInd[rp]
    console.log(word, rword)
    if (word === '') {
      wp += 1
      continue
    }
    if (rword === '') {
      rp += 1
      continue
    }
    if (ind === rind) {
      rp += 1
      continue
    }
    if (rword.startsWith(word)) {
      console.log(word, rword)
      inclPair.push([ind, rind])
      rp += 1
    } else if (word < rword) wp += 1
    else if (word >= rword) rp += 1
  }
  // rword included in word
  wp = 0
  rp = 0
  while (wp < words.length && rp < words.length) {
    const [word, ind] = wordInd[wp]
    const [rword, rind] = revWordInd[rp]
    console.log(word, rword)
    if (word === '') {
      wp += 1
      continue
    }
    if (rword === '') {
      rp += 1
      continue
    }

    if (ind === rind) {
      wp += 1
      continue
    }
    if (word.startsWith(rword)) {
      console.log(word, rword)
      inclPair.push([ind, rind])
      wp += 1
    } else if (word < rword) wp += 1
    else if (word >= rword) rp += 1
  }
  // console.log(inclPair)
  let palSet = new Set()
  for (let i = 0; i < inclPair.length; ++i) {
    const rev = words[inclPair[i][1]]
    const wo = words[inclPair[i][0]]
    let pal = wo + rev
    // console.log(pal)
    let indPair
    let indPairStr
    if (isPalindrome(pal)) {
      indPair = [inclPair[i][0], inclPair[i][1]]
      indPairStr = JSON.stringify(indPair)
      if (!palSet.has(indPairStr)) {
        res.push(indPair)
        palSet.add(indPairStr)
      }
    }
    pal = rev + wo
    // console.log(pal)
    if (isPalindrome(pal) && !palSet.has(pal)) {
      indPair = [inclPair[i][1], inclPair[i][0]]
      indPairStr = JSON.stringify(indPair)
      if (!palSet.has(indPairStr)) {
        res.push(indPair)
        palSet.add(indPairStr)
      }
    }
  }
  return res
}
console.log(palindromePairs(['a', 'aa', 'aaa']))
