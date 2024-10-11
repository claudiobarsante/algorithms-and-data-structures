/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
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
function isMirror(leftNode, rightNode) {
  // -- if they're null they're symmetric
  if (leftNode === null && rightNode === null) {
    return true;
  }

  if (leftNode === null || rightNode === null) {
    return false;
  }

  // -- check if the values are equal
  // -- check if subtrees are symmetric to the oposite side
  return (
    leftNode.val === rightNode.val &&
    isMirror(leftNode.right, rightNode.left) &&
    isMirror(leftNode.left, rightNode.right)
  );
}
var isSymmetric = function (root) {
  return isMirror(root, root);
};
