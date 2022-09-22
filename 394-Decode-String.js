/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  let tokens = []

  function scan(s) {
    console.log(s)
    const slist = s.split('')
    slist.push('$')
    console.log(slist)
    let fp = 0
    let ch = slist[fp]
    while (fp < slist.length) {
      let tok = ''
      if (/[0-9]/.test(ch)) {
        while (/[0-9]/.test(ch)) {
          tok += ch
          fp += 1
          ch = slist[fp]
        }
        tokens.push(tok)
      } else if (/[a-z]/.test(ch)) {
        while (/[a-z]/.test(ch)) {
          tok += ch
          fp += 1
          ch = slist[fp]
        }
        tokens.push(tok)
      } else if (ch === '[' || ch === ']') {
        tokens.push(ch)
        fp += 1
        ch = slist[fp]
      } else fp += 1
    }
    tokens.push('$')
  }
  function enc() {
    let decoded = ''
    // console.log('token=', tokens[tp])
    while (/[0-9]/.test(tokens[tp]) || /[a-z]/.test(tokens[tp])) {
      if (/[0-9]/.test(tokens[tp])) {
        let rep = Number(tokens[tp])
        console.log('rep=', rep)
        tp += 1
        if (tokens[tp] === '[') {
          tp += 1
          let temp = enc()
          console.log('temp=', temp)
          if (tokens[tp] === ']') {
            decoded += temp.repeat(rep)
            console.log('num decoded=', decoded)
            tp += 1
          } else {
            console.log('error -] expected')
          }
        } else {
          console.log('error -[ expected')
        }
      } else if (/[a-z]/.test(tokens[tp])) {
        console.log('str token=', tokens[tp])
        decoded += tokens[tp]
        // console.log('str decoded=', decoded)
        tp += 1
        console.log('str next token=', tokens[tp])
      } else {
        console.log('error - unexpected token', tokens[tp])
        break
      }
    }
    console.log('decoded=', decoded)
    return decoded
  }
  scan(s)
  console.log(tokens)
  let tp = 0
  let res = enc()
  return res
}
console.log(decodeString('2[abc]3[cd]ef'))
