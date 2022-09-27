/**
 * @param {string[]} equations
 * @return {boolean}
 */
const equationsPossible = function (equations) {
  const adjList = {}
  const visited = {}
  const neSet = {}
  const eqCompList = []

  function DFS(v, comp) {
    visited[v] = true
    if (adjList[v]) {
      adjList[v].forEach((w) => {
        if (!visited[w]) {
          comp.push(w)
          DFS(w, comp)
        }
      })
    }
  }
  for (let i = 0; i < equations.length; ++i) {
    let eqn = [...equations[i]]
    // console.log(eqn)
    if (eqn[1] === '!') {
      // build neSet
      if (neSet[eqn[0]]) {
        neSet[eqn[0]].add(eqn[3])
      } else {
        neSet[eqn[0]] = new Set(eqn[3])
      }
      if (neSet[eqn[3]]) {
        neSet[eqn[3]].add(eqn[0])
      } else {
        neSet[eqn[3]] = new Set(eqn[0])
      }
    } else {
      // adjList
      if (adjList[eqn[0]]) {
        adjList[eqn[0]].add(eqn[3])
      } else {
        adjList[eqn[0]] = new Set(eqn[3])
      }
      if (adjList[eqn[3]]) {
        adjList[eqn[3]].add(eqn[0])
      } else {
        adjList[eqn[3]] = new Set(eqn[0])
      }
    }
    // visited
    visited[eqn[0]] = false
    visited[eqn[3]] = false
  }
  console.log(neSet)
  console.log(adjList)
  console.log(visited)
  Object.keys(visited).forEach((v) => {
    if (!visited[v]) {
      let eqComp = [v]
      DFS(v, eqComp)
      eqCompList.push(eqComp)
    }
  })
  console.log(eqCompList)
  for (let i = 0; i < eqCompList.length; ++i) {
    let comp = eqCompList[i]
    for (let j = 0; j < comp.length; ++j) {
      let v = comp[j]
      console.log(comp.filter((w) => neSet[v] && neSet[v].has(w)))
      if (comp.filter((w) => neSet[v].has(w)).length > 0) return false
    }
  }

  return true
}
console.log(equationsPossible(['a!=a']))
