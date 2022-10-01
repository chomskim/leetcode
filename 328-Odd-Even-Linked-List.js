/**
 * @desc 328. Odd Even Linked List
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
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function oddEvenList(head) {
    let evenList = null;
    let evenLast = null;
    let oddList = null;
    let oddLast = null;
    let curp = head;
    let count = 1;
    while (curp) {
        if (count % 2 === 0) {
            if (!evenLast) {
                evenList = new ListNode(curp.val, null);
                evenLast = evenList;
            }
            else {
                let newNode = new ListNode(curp.val, null);
                evenLast.next = newNode;
                evenLast = newNode;
            }
        }
        else {
            if (!oddLast) {
                oddList = new ListNode(curp.val, null);
                oddLast = oddList;
            }
            else {
                let newNode = new ListNode(curp.val, null);
                oddLast.next = newNode;
                oddLast = newNode;
            }
        }
        curp = curp.next;
        count += 1;
    }
    if (oddLast) {
        oddLast.next = evenList;
    }
    return oddList;
}
