/**
 * @desc 148. Sort List
 *
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function listToArray(list) {
    let res = [];
    while (list) {
        res.push(list.val);
        list = list.next;
    }
    return res;
}
function arrayToList(arr) {
    let head = null;
    let last = null;
    for (let i = 0; i < arr.length; ++i) {
        if (!last) {
            head = new ListNode(arr[i], null);
            last = head;
        }
        else {
            last.next = new ListNode(arr[i], null);
            last = last.next;
        }
    }
    return head;
}
function sortList(head) {
    let arr = listToArray(head);
    arr.sort((a, b) => a - b);
    let res = arrayToList(arr);
    return res;
}
