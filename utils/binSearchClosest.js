function binSearchClosest(ser, val, low, high) {
    if (val < ser[low]) {
        return low;
    }
    if (val > ser[high]) {
        return high;
    }
    let mid = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (ser[mid] === val) {
            return mid;
        }
        else if (ser[mid] < val) {
            low = mid + 1;
        }
        else if (ser[mid] > val) {
            high = mid - 1;
        }
    }
    // low == high+1
    return ser[low] - val < val - ser[high] ? low : high;
}
