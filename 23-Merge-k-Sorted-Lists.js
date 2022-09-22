/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  const MAX_VAL = 10 ** 4 + 1
  let allp = new Array(lists.length).fill(0)
  let res = []
  while (allp.some((p, i) => lists[i][p] < MAX_VAL)) {}
}
