/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let sp = head
  let dp = head
  let count = 0
  while (true) {
    if (dp === null) break
    if (count % 2) sp = sp.next
    dp = dp.next
    count += 1
  }
  return sp
}
