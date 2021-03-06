/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;
  while (p1 || p2) {
    let val1 = p1 ? p1.val : 0;
    let val2 = p2 ? p2.val : 0;
    let count = val1 + val2 + carry;
    carry = Math.floor(count / 10);
    p3.next = new ListNode(count % 10);
    p3 = p3.next;

    if (p1) {
      p1 = p1.next;
    }
    if (p2) {
      p2 = p2.next;
    }
  }
  if (carry) {
    p3.next = new ListNode(carry);
  }
  return l3.next;
};
// @lc code=end
