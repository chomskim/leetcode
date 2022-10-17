/**
 * @desc 16. 3Sum Closest
 * @param nums: number[]
 * @param target: number
 * @returns {number} sum of the three integers such that the sum is closest to target
 */
function threeSumClosest(nums, target) {
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
    let minDiff = 9999;
    let res = 0;
    let sor = nums.sort((a, b) => a - b);
    let fp = 0;
    let bp = sor.length - 1;
    while (fp < bp - 1) {
        while (true) {
            let diff = target - (sor[fp] + sor[bp]);
            let ind = binSearchClosest(sor, diff, fp + 1, bp - 1);
            let clos = sor[fp] + sor[bp] + sor[ind];
            console.log(sor.slice(fp, bp + 1), sor[fp], sor[bp], sor[ind], clos);
            if (clos === target) {
                return clos;
            }
            else {
                if (Math.abs(clos - target) < minDiff) {
                    minDiff = Math.abs(clos - target);
                    res = clos;
                    // console.log(sor.slice(fp, bp + 1), minDiff, res)
                }
            }
            bp -= 1;
            if (bp <= fp + 1)
                break;
        }
        fp += 1;
        bp = sor.length - 1;
    }
    return res;
}
console.log(threeSumClosest([
    -13, 592, -501, 770, -952, -675, 322, -829, -246, 657, 608, 485, -112, 967, -30, 182, -969, 559, -286, -64, 24,
    365, -158, 701, 535, -429, -217, 28, 948, -114, -536, -711, 693, 23, -958, -283, -700, -672, 311, 314, -712, -594,
    -351, 658, 747, 949, 70, 888, 166, 495, 244, -380, -654, 454, -281, -811, -168, -839, -106, 877, -216, 523, -234,
    -8, 289, -175, 920, -237, -791, -976, -509, -4, -3, 298, -190, 194, -328, 265, 150, 210, 285, -176, -646, -465,
    -97, -107, 668, 892, 612, -54, -272, -910, 557, -212, -930, -198, 38, -365, -729, -410, 932, 4, -565, -329, -456,
    224, 443, -529, -428, -294, 191, 229, 112, -867, -163, -979, 236, -227, -388, -209, 984, 188, -549, 970, 951,
    -119, -146, 801, -554, 564, -769, 334, -819, -356, -724, -219, 527, -405, -27, -759, 722, -774, 758, 394, 146,
    517, 870, -208, 742, -782, 336, -364, -558, -417, 663, -914, 536, 293, -818, 847, -322, 408, 876, -823, 827, 167,
], 7175));
