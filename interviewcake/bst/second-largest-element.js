/*where the size of a word corresponds to how often it appears in the body of text.

To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.

We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier and cleaner when we want to iterate over our data.

Think about capitalized words. For example, look at these sentences:

  "After beating the eggs, Dana read the next step:"
"Add milk and eggs, then add flour and sugar."
What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

Assume the input will only contain words and standard punctuation. */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function findSecondLargest(treeRoot) {
  // Find the second largest item in the binary search tree
  let result = [];

  let current = treeRoot;

  function traverse(current) {
    if (current.left) traverse(current.left);
    result.push(current.value);
    if (current.right) traverse(current.right);
  }

  traverse(current);

  //Todo: still need to check the result with only one node
  if (result.length === 1) return result[0];

  return result[result.length - 2];
}

// Tests

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(findSecondLargest(treeRoot), 70, desc);

desc = 'largest has a left child';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
assertEquals(findSecondLargest(treeRoot), 60, desc);

desc = 'largest has a left subtree';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
leftNode = rightNode.insertLeft(60);
leftNode.insertRight(65);
leftNode = leftNode.insertLeft(55);
leftNode.insertRight(58);
assertEquals(findSecondLargest(treeRoot), 65, desc);

desc = 'second largest is root node';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
assertEquals(findSecondLargest(treeRoot), 50, desc);

desc = 'two nodes root is largest';
treeRoot = new BinaryTreeNode(50);
treeRoot.insertLeft(30);
assertEquals(findSecondLargest(treeRoot), 30, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(findSecondLargest(treeRoot), 40, desc);

desc = 'ascending linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(60);
rightNode = rightNode.insertRight(70);
rightNode = rightNode.insertRight(80);
assertEquals(findSecondLargest(treeRoot), 70, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertThrowsError(() => findSecondLargest(treeRoot), desc);

desc = 'when tree is empty';
treeRoot = null;
assertThrowsError(() => findSecondLargest(treeRoot), desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
