/**
 * Binary Search Tree
 * Description:
 * Value on the right node keeps increasing
 * Value on the left goes on decreasing
 * Node can have max 2 child nodes
 *
 * lookup o log(n)
 * insert o log (n)
 * delete o log (n)
 *
 * Below are few balancing techniques
 * AVL Trees
 * Red black tree
 *
 *
 * Binary Heaps : Majorly used in  Priority queues ,every node on top has higher value then below
 * lookup o (n)
 * insert o log (n)
 * delete o log (n)
 *
 * Tries: Time compelexity  o (length of the word)
 * Specialized tree with Text , probably used auto suggestion
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
          currentNode = currentNode.right;
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
  bst.insert(44);
  bst.insert(33);

  //visualize it with
  //https://jsoncrack.com/editor

  const str = traverse(bst.root);
  console.log(JSON.stringify(str));
}
