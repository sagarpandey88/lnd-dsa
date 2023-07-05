/**
 * Binary Search Tree
 *
 *
 */

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value <= currentNode.value) {
          // go left
          //check if left node doesnt exist , then newnode is our left node
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // if a left node exists then assign it to current node so that it can continue
          currentNode = currentNode.left;
        } else {
          //go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode.right = newNode;
        }
      }
    }
  }

  lookup(value) {}
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

export function init() {
  const bst = new BinarySearchTree();
  bst.insert(9);
  bst.insert(4);
  bst.insert(22);

  const str = traverse(bst.root);
  console.log(JSON.stringify(str));
}
