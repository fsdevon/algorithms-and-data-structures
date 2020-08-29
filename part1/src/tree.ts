// --- Directions
// 1) Create a node class. The constructor should accept an argument that
// gets assigned to the data property and initialize and empty array for storing children.
// The node class shold have method 'add' and 'remove'.
// 2) Create a tree class. The tree constructor should initialize a 'root' property to null.
// 3) Implement 'traverseBFS' and 'traverseDFS' on the tree class

import Node from "./tree-node";

class Tree {
  root: any;
  constructor() {
    this.root = null;
  }

  traverseBF(fn: any) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn: any) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

export default Tree;
