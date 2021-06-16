class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      // assuming that there aren't duplicates
      if (value === current.value) return false;
      //--smaller values to left, larger values to right
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }

    return this;
  }

  contains(value) {
    if (this.root === null) return false;

    let current = this.root;

    while (current) {
      if (current.value === value) return true;

      if (value < current.value) {
        if (current.left === null) {
          return false;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          return false;
        } else {
          current = current.right;
        }
      }
    }
    return false;
  }

  bfs() {
    if (this.root === null) return false;

    let node = this.root;

    let queue = [];
    let result = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  dfsPreOrder() {
    if (this.root === null) return false;

    let visited = [];

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }

  dfsInOrder() {
    if (this.root === null) return false;

    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }

  dfsPostOrder() {
    if (this.root === null) return false;

    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(this.root);

    return visited;
  }
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
