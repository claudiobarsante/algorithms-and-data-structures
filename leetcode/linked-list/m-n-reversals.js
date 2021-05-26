/*
Success
Details 
Runtime: 80 ms, faster than 52.49% of JavaScript online submissions for Reverse Linked List II.
Memory Usage: 38.8 MB, less than 35.87% of JavaScript online submissions for Reverse Linked List II.
*/
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = head => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};
//-- -- this linked list is not 0 indexed, so first position is equal to 1 (one)
const reverseBetween = function (head, m, n) {
  let currentPosition = 1;
  let currentNode = head;
  let start = head;

  // ---- find the last list node before the start of our reverse link list section
  // -- We also need to take that values next value later on and attach it to the start of the reverse section.
  while (currentPosition < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPosition++;
  }

  let newList = null; // --  represents the list so far equal to null
  let tail = currentNode; //is going to be equal to the first value in the start of our reversal, here equals to 2(two)

  // -- start reversing between m and n positions
  while (currentPosition >= m && currentPosition <= n) {
    const next = currentNode.next;
    currentNode.next = newList; // -- first time will be null
    newList = currentNode; // -- Now we want to set newList equal to our new currentNode, because currentNode is going to represent the head of the list that we've built so far.
    currentNode = next;
    currentPosition++;
  }

  /* -- newList is always the head of the actual full list that we have that's
      reversed, then we're going to say that tail.next is equal to the current note.
      Because current node is currently pointing at end plus one. */

  start.next = newList;
  tail.next = currentNode;

  /* -- If m equals 1(one), so this means that we're reversing the position of the
    nodes starting from the very first value, we don't really care where n goes to.
    But the thing here is that we're reversing m of one.
    What this means is that given this current example, we have the link list that gets output is going
    to look like this 4-->3-->2-->1-->5-->null

    JavaScript pointers always reference the thing in memory, so technically speaking, this
    head value is still pointing to this one, but when m equals one, this initial position, one variable
    is now in position four, because it ends up being the tail value.

    So what this means is that when m equals one, we need to return the new head of the reverse link list
    and the head of the reverse link list is equal to the newList value because remember, newList is
    always going to give us the head of the new reverse list that we have.
    And when m equals one, the newList is the very beginning of our entire linked list.*/
  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};

printList(linkedList);
console.log('---after reverse---');
printList(reverseBetween(linkedList, 2, 4));

/**
 92. Reverse Linked List II
Medium

3710

194

Add to List

Share
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 
 */
