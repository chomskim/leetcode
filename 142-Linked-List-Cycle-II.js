/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  const visitedMap = {}

  let pos = head
  while (pos) {
    if (visitedMap[pos]) {
      return pos
    }
    visitedMap[pos] = true
    pos = pos.next
  }
  return null
}
