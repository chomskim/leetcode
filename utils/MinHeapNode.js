class MinHeapNode {
    constructor() {
        this.heap = [null];
    }
    getMin() {
        return this.heap[1];
    }
    size() {
        return this.heap.length - 1;
    }
    empty() {
        return this.heap.length === 1;
    }
    insert(node) {
        // Node(val, ...)
        this.heap.push(node);
        let current = this.heap.length - 1;
        let currPar = Math.floor(current / 2);
        /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
        while (this.heap[currPar] && this.heap[currPar].val > this.heap[current].val) {
            /* Swapping the two nodes */
            ;
            [this.heap[currPar], this.heap[current]] = [this.heap[current], this.heap[currPar]];
            current = currPar;
            currPar = Math.floor(current / 2);
        }
    }
    remove() {
        let res;
        if (this.size() <= 1) {
            res = this.heap.pop();
            this.heap[0] = null;
            return res;
        }
        res = this.heap[1];
        this.heap[1] = this.heap.pop();
        let current = 1;
        let [left, right] = [2 * current, 2 * current + 1];
        let currChild = this.heap[right] && this.heap[right].val < this.heap[left].val ? right : left;
        while (this.heap[currChild] && this.heap[current].val > this.heap[currChild].val) {
            ;
            [this.heap[current], this.heap[currChild]] = [this.heap[currChild], this.heap[current]];
            current = currChild;
            [left, right] = [2 * current, 2 * current + 1];
            currChild = this.heap[right] && this.heap[right].val < this.heap[left].val ? right : left;
        }
        return res;
    }
}
const heap = new MinHeapNode();
let stones = [
    -6, -3, -1, 1, 2, 2, 2, -10, -8, -6, -2, 4, -2, -8, -4, -3, -3, -2, -1, 1, 2, 3, -8, -6, -5, -4, -2, -2, 2, 4,
];
stones.forEach((sto, i) => {
    heap.insert({ key: String(i), val: sto });
});
let res = [];
while (!heap.empty()) {
    console.log(heap.heap);
    res.push(heap.remove());
}
console.log(res);
