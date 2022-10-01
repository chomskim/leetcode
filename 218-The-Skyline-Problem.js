"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc 218. The Skyline Problem [Hard]
 * @param buildings
 * @returns number[][] the skyline formed by these buildings collectively
 */
const MaxHeapNode_1 = __importDefault(require("./utils/MaxHeapNode"));
function getSkyline(buildings) {
    let topHeap = new MaxHeapNode_1.default();
    let eventList = {};
    let hl2rMap = {};
    for (let i = 0; i < buildings.length; ++i) {
        const [left, right, height] = buildings[i];
        if (eventList[left]) {
            eventList[left].push(['left', height]);
        }
        else {
            eventList[left] = [['left', height]];
        }
        if (eventList[right]) {
            eventList[right].push(['right', height]);
        }
        else {
            eventList[right] = [['right', height]];
        }
        hl2rMap[[height, left].join(',')] = right;
    }
    console.log(eventList);
    console.log(hl2rMap);
    let res = [];
    let maxHeight = 0;
    Object.keys(eventList).forEach((pos) => {
        let evs = eventList[pos];
        evs.forEach((ev) => {
            let height = ev[1];
            if (ev[0] === 'left') {
                if (height > maxHeight) {
                    res.push([pos, height]);
                    maxHeight = height;
                }
                topHeap.insert({ val: height, key: [pos, hl2rMap[[height, pos].join(',')]].join(',') });
                console.log({ val: height, key: [pos, hl2rMap[[height, pos].join(',')]].join(',') });
            }
            if (ev[0] === 'right') {
            }
        });
        console.log(topHeap);
    });
    return res;
}
console.log(getSkyline([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8],
]));
