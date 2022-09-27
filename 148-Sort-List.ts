/**
 * @desc
 * 148. Sort List
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
function listToArray(list: ListNode | null): number[] {
  let res: number[] = []
  while (list) {
    res.push(list.val)
    list = list.next
  }
  return res
}
function arrayToList(arr: number[]): ListNode | null {
  let head: ListNode | null = null
  let last: ListNode | null = null
  for (let i = 0; i < arr.length; ++i) {
    if (!last) {
      head = new ListNode(arr[i], null)
      last = head
    } else {
      last.next = new ListNode(arr[i], null)
      last = last.next
    }
  }
  return head
}
function sortList(head: ListNode | null): ListNode | null {
  let arr = listToArray(head)
  arr.sort((a, b) => a - b)
  let res = arrayToList(arr)
  return res
}
