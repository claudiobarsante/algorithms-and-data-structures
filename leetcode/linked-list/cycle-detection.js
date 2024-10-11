class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

let curr = linkedList,
  cycleNode;
while (curr.next !== null) {
  if (curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;
// ---- Generate our linked list ----

// --------- Solution -----------
/** Success
Details 
Runtime: 88 ms, faster than 80.90% of JavaScript online submissions for Linked List Cycle II.
Memory Usage: 41.3 MB, less than 44.76% of JavaScript online submissions for Linked List Cycle II.
 */
const findCycle = function (head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (true) {
    slow = slow.next;
    fast = fast.next;

    // -- if fast === null or fast.next === null there's no cycle or you hit the end of the linked list
    if (fast === null || fast.next === null) {
      return null;
    } else {
      fast = fast.next;
    }

    if (slow === fast) break;
  }

  let pointerOne = head;
  let pointerTwo = fast;

  while (pointerOne !== pointerTwo) {
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next;
  }

  return pointerOne;
};

console.log(findCycle(linkedList));

/** 142. Linked List Cycle II
Medium

4244

314

Add to List

Share
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
 

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 */
