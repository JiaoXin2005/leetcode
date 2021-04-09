/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let res = [];
  let nodes = [root];

  while (nodes.length) {
    let sum = 0;
    let size = nodes.length;

    for (let i = 0; i < size; i++) {
      let cur = nodes.shift();
      sum += cur.val;
      cur.left && nodes.push(cur.left);
      cur.right && nodes.push(cur.right);
    }

    res.push(sum / size);
  }
  return res;
};
// @lc code=end
