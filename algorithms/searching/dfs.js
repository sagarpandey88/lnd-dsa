/**
 * Follows one branch of the tree until target node is found or end
 * if end is reached go up and look for other children
 *
 * ^ Less Memory , Does path exists?
 *  v Slow
 *
 *  Inorder - starts from bottom ,so that the result is in sorted order
 * preorder - Starts from parent and child nodes left to right [recreating the tree]
 * postorder - left to right child then parent
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

  depthFirstSearchInoder() {
    return this.traveseInOrder(this.root, []);
  }
  depthFirstSearchPreoder() {
    return this.travesePreOrder(this.root, []);
  }
  depthFirstSearchPostorder() {
    return this.travesePostOrder(this.root, []);
  }
  traveseInOrder(node, list) {
    if (node.left) {
      this.traveseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this.traveseInOrder(node.right, list);
    }
    return list;
  }

  travesePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
      this.travesePreOrder(node.left, list);
    }
    if (node.right) {
      this.travesePreOrder(node.right, list);
    }
    return list;
  }

  travesePostOrder(node, list) {
    if (node.left) {
      this.travesePostOrder(node.left, list);
    }
    if (node.right) {
      this.travesePostOrder(node.right, list);
    }
    list.push(node.value);

    return list;
  }
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
  console.log(bst.depthFirstSearchPostorder([bst.root], []));

  //visualize it with
  //https://jsoncrack.com/editor

  const str = traverse(bst.root);
  console.log(JSON.stringify(str));
}
