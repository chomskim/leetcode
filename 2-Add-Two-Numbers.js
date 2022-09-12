/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let res = null
  let cur = null
  let carry = 0
  let p1 = l1
  let p2 = l2
  while (p1 || p2) {
    let sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry
    if (sum >= 10) {
      sum -= 10
      carry = 1
    } else {
      carry = 0
    }
    const last = new ListNode(sum, null)
    if (!cur) {
      cur = last
      res = cur
    } else {
      cur.next = last
      cur = cur.next
    }
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
  }
  if (carry !== 0) {
    cur.next = new ListNode(carry, null)
  }
  return res
}
