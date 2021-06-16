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
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
