// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let first = head;
  let second = head;

  let counter = 1;

  // -- positionong second K positions a head o f first, so when second hits the end of the linkedlist
  // -- first will be positioned on the node to be removed
  while (counter <= k) {
    second = second.next;
    counter++;
  }
  // -- if second is null the node you have to delete is the first one, the head
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
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
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
