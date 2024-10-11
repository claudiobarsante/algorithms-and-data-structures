/**
Success
Details 
Runtime: 148 ms, faster than 5.38% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 42 MB, less than 12.95% of JavaScript online submissions for Maximum Depth of Binary Tree.
Next challenges: 
 */

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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let max = Math.max(maxDepth(root.left), maxDepth(root.right));

  return max + 1; //you have to add 1(one) because the distance on the root node initially is 0(zero)
};

/**
  * 104. Maximum Depth of Binary Tree
Easy

4118

99

Add to List

Share
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
  */
