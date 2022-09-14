/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  function arrayEqual(a, b) {
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false
    }
    return true
  }
  function inQueue(queue, node) {
    for (let i = 0; i < queue.length; ++i) {
      if (queue[i].level === node.level && queue[i].value === node.value && arrayEqual(queue[i].path, node.path))
        return true
    }
    return false
  }
  const queue = []
  const res = []

  const startNode = { level: 0, value: 0, path: [] }
  queue.push(startNode)
  while (queue.length) {
    const node = queue.shift()
    if (node.level === 2 * n && node.value === 0) {
      res.push(node.path)
      console.log('res=', res)
    } else {
      console.log('node=', node)
      if (node.value > 0) {
        const close = { level: node.level + 1, value: node.value - 1, path: [...node.path, -1] }
        if (close.level <= 2 * n && !inQueue(queue, close)) queue.push(close)
      }
      const open = { level: node.level + 1, value: node.value + 1, path: [...node.path, 1] }
      if (open.level <= 2 * n && !inQueue(queue, open)) queue.push(open)
    }
    console.log(queue)
  }
  console.log('res=', res)
  const ret = []
  res.forEach((li) => {
    const par = li.map((v) => (v === 1 ? '(' : ')')).join('')
    console.log('par=', par)
    ret.push(par)
  })

  console.log('ret=', ret)
  return ret
}
generateParenthesis(3)
