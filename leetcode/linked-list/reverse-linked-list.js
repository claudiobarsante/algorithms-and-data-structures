/*
NOTE: The beginning portion builds our test case linked list. 
 */

class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

// ---- Generate our linked list ----

const printList = head => {
	if (!head) {
		return;
	}

	console.log(head.val);
	printList(head.next);
};

// --------- Solution -----------
const reverseList = head => {
	let next = null;
	let previous = null;
	let current = head;

	while (current) {
		next = current.next;
		current.next = previous;
		previous = current;
		current = next;
	}

	return previous;
};

printList(linkedList);
console.log('after reverse');
printList(reverseList(linkedList));
