class ListIterator {
    constructor(list) {
        this.done = false;
        this.value = 0;
        this.iter = this.iterator(list);
    }
    *iterator(list) {
        for (let i = 0; i < list.length - 1; ++i) {
            if (i < list.length - 1)
                yield list[i];
        }
        return list[list.length - 1];
    }
    next() {
        const { value, done } = this.iter.next();
        console.log(value, done);
        this.done = done;
        return value;
    }
    hasNext() {
        return !this.done;
    }
}
let liter = new ListIterator([1, 2, 3, 4]);
while (liter.hasNext()) {
    console.log(liter.next());
}
