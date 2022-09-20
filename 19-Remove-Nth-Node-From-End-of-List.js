/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  function len(head) {
    let res = 0
    let fp = head
    while (fp) {
      res += 1
      fp = fp.next
    }
    return res
  }

  let pos = len(head) - n
  if (pos === 0) return head.next
  let count = 0
  let fp = head
  let prev
  while (fp) {
    prev = fp
    fp = fp.next
    count += 1
    if (count == pos) {
      prev.next = fp.next
      break
    }
  }
  return head
}
