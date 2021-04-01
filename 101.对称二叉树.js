/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const dfs = (l, r) => {
    if (l === null && r === null) return true;
    if (!l || !r) return false;

    return l.val === r.val && dfs(l.left, r.right) && dfs(l.right, r.left);
  };
  return dfs(root.left, root.right);
};
// @lc code=end
// [1,2,3]
