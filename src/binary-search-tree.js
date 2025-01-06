const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }
      return node;
    }
  }

  has( data ) {
    return searchNode(this.rootNode, data);
    
    function searchNode(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }

      return value < node.data ? searchNode(node.left, value) : searchNode(node.right, value);
    }
  }

  find( data ) {
    return searchNode(this.rootNode, data);
    
    function searchNode(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }

      return value < node.data ? searchNode(node.left, value) : searchNode(node.right, value);
    }
  }

  remove( data ) {
    this.rootNode = removeNode(this.rootNode, data);
    
    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else { 
        if (!node.left && !node.right) {
          return null;
        }
      }

      if (!node.left) {
        node = node.right;
        return node;
      }
       if (!node.right) {
        node = node.left;
        return node;
      }
      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;
      node.right = removeNode(node.right, minFromRight.data);
      return node;
      }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data; 
    
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    
    let node = this.rootNode;
    while (node.right) {
     node = node.right;
    }
    return node.data; 
  }
}

module.exports = {
  BinarySearchTree
};