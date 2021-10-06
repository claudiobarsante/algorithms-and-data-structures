/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?

   Hide Hint #1  
Maintain two pointers and update one with a delay of n steps.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let first = head;
  let second = head;

  let counter = 1;

  // -- positionong second K positions a head o f first, so when second hits the end of the linkedlist
  // -- first will be positioned on the node to be removed
  while (counter <= n) {
    second = second.next;
    counter++;
  }
  // -- if you have just one node
  if (head.next === null) {
    head = null;
    return head;
  }
  // -- if second is null the node you have to delete is the first one, the head
  if (second === null) {
    head.val = head.next.val;
    head.next = head.next.next;
    return head;
  }
  // -- until you hit the end of the linkedlist
  // -- since you are checking second.next and not secont to be equal to null, first will be pointing to the node right before the node you want to remove
  while (second.next !== null) {
    first = first.next;
    second = second.next;
  }

  // -- first is pointing to the node right before the node you want to remove
  // -- first.next = NODE_TO_REMOVE
  first.next = first.next.next;

  return head;
};
