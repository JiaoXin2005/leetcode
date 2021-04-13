/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const update = (val) => {
    if (val >= low && val <= high) {
      sum += val;
    }
  };

  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    update(node.val);
    dfs(node.right);
  };

  dfs(root);

  return sum;
};
// @lc code=end
