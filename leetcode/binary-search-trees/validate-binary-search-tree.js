/**
 Success
Details 
Runtime: 92 ms, faster than 51.97% of JavaScript online submissions for Validate Binary Search Tree.
Memory Usage: 42.9 MB, less than 35.27% of JavaScript online submissions for Validate Binary Search Tree.
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return validadeHelper(root, -Infinity, Infinity);
};

function validadeHelper(root, min, max) {
  if (root === null) return true;

  if (root.val <= min || root.val >= max) return false;

  const isLeftNodeValid = validateHelper(root.left, min, root.val);
  const isRightNodeValid = validateHelper(root.right, root.val, max);

  return isLeftNodeValid === isRightNodeValid;
}

/*
98. Validate Binary Search Tree
Medium

6295

704

Add to List

Share
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
*/
