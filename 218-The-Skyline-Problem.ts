/**
 * @desc 218. The Skyline Problem [Hard]
 * @param buildings
 * @returns number[][] the skyline formed by these buildings collectively
 */
import MaxHeapNode from './utils/MaxHeapNode'

type EventRow = [string, number]
function getSkyline(buildings: number[][]): number[][] {
  let topHeap = new MaxHeapNode()
  let eventList: { [key: number]: EventRow[] } = {}
  let hl2rMap: { [key: string]: number } = {}

  for (let i = 0; i < buildings.length; ++i) {
    const [left, right, height] = buildings[i]
    if (eventList[left]) {
      eventList[left].push(['left', height])
    } else {
      eventList[left] = [['left', height]]
    }
    if (eventList[right]) {
      eventList[right].push(['right', height])
    } else {
      eventList[right] = [['right', height]]
    }
    hl2rMap[[height, left].join(',')] = right
  }
  console.log(eventList)
  console.log(hl2rMap)

  let res: number[][] = []
  let maxHeight = 0
  Object.keys(eventList).forEach((pos) => {
    let evs: EventRow = eventList[pos]
    evs.forEach((ev) => {
      let height = ev[1]
      if (ev[0] === 'left') {
        if (height > maxHeight) {
          res.push([pos, height])
          maxHeight = height
        }
        topHeap.insert({ val: height, key: [pos, hl2rMap[[height, pos].join(',')]].join(',') })
        console.log({ val: height, key: [pos, hl2rMap[[height, pos].join(',')]].join(',') })
      }
      if (ev[0] === 'right') {
      }
    })
    console.log(topHeap)
  })
  return res
}
console.log(
  getSkyline([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8],
  ])
)
