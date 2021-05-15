/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
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
var detectCycle = function(head) {
  if (!head) return null;

  let fast = head;
  let slow = head;

  while (fast) {
    if (!fast.next) return null;

    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      slow = head;

      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;
};
// @lc code=end
