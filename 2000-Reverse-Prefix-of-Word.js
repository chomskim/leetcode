const reversePrefix = function (word, ch) {
  const pos = word.indexOf(ch)
  if (pos === -1) return word

  let prefix = word.slice(0, pos + 1)
  let rem = word.slice(pos + 1)
  console.log(prefix)
  return prefix.split('').reverse().join('') + rem
}

console.log(reversePrefix('abcdefd', 'd'))
