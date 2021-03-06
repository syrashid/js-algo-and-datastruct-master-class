class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(val){
    const node = new Node(val);
    if(this.root) {
      let comparison = this.root;
      while(true){
        if(node.value === comparison.value) return undefined;
        if (comparison.value > node.value) {
          if (comparison.left) {
            comparison = comparison.left;
          } else {
            comparison.left = node;
            break;
          }
        } else {
          if (comparison.right) {
            comparison = comparison.right;
          } else {
            comparison.right = node;
            break;
          }
        }
      }
    } else{
      this.root = node;
    }
    return this;
  }

  find(val){
    let comparison = this.root;
    while(comparison) {
      if (val === comparison.value) {
        return comparison;
      } else if (val > comparison.value) {
        comparison = comparison.right;
      } else {
        comparison = comparison.left;
      }
    }
    return false;
  }

  findWithParent(val){
    let comparison = this.root;
    let parent = null;
    while(comparison) {
      if (val === comparison.value) {
        return [comparison, parent];
      } else if (val > comparison.value) {
        parent = comparison;
        comparison = comparison.right;
      } else {
        parent = comparison;
        comparison = comparison.left;
      }
    }
    return false;
  }

  remove(val){
    let [node, parent] = this.findWithParent(val);
    // Case 1: Leaf
    // Case 2: Has 2 Children
    // Case 3: Has 1 Child
    if (node.left === null && node.right === null) {
      parent.left === node ? parent.left = null : parent.right = null;
    } else if (node.left !== null && node.right !== null) {
      // Find in order successor
      let successor = node.right;
      while(successor.left) {
        successor = successor.left;
      }
      if (successor.right) this.remove(successor.value)
      node.value = successor.value;
    } else {
      if (node.left) {
        parent.left === node ? parent.left = node.left : parent.right = node.left;
      } else {
        parent.right === node ? parent.right = node.right : parent.left = node.right;
      }
    }
  }

  largest() {
    let largest = this.root;
    while(largest.right) {
      largest = largest.right;
    }
    return largest;
  }

  largestWithParent() {
    let largest = this.root;
    let parent = null;
    while(largest.right) {
      parent = largest;
      largest = largest.right;
    }
    return [largest, parent];
  }

  secondLargest() {
    // Find largest element
    let [largest, parent] = this.largestWithParent();
    let second;

    if (largest.left) {
      // If there is a left child, find the largest element from there
      second = largest.left;
      while(second.right) {
        second = second.right;
      }
      return second;
    } else {
      // Otherwise return parent
      return parent;
    }
  };

  isBalanced() {
    if (this.root === null) return true;

    const leftHeight = this._height(this.root.left);
    const rightHeight = this._height(this.root.right);

    return Math.abs(leftHeight - rightHeight) <= 1
  };

  _height(node) {
    if (node === null) {
      return 0;
    } else if (node.left === null && node.right === null) {
      return 1;
    } else {
      return Math.max(this._height(node.left), this._height(node.right)) + 1;
    }
  }
}


// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);

// binarySearchTree.remove(50);
// console.log(binarySearchTree.root.right.value); // 20
// console.log(binarySearchTree.root.right.right); // null
// binarySearchTree.remove(5);
// console.log(binarySearchTree.root.left.left.value); // 1
// console.log(binarySearchTree.root.left.left.right); // null

// var binarySearchTree = new BinarySearchTree();binarySearchTree.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
// binarySearchTree.remove(1);
// console.log(binarySearchTree.root.left.left.value); // 5
// console.log(binarySearchTree.root.left.left.left); // null
// console.log(binarySearchTree.root.left.left.right); // null
// binarySearchTree.remove(20);
// console.log(binarySearchTree.root.right.value); // 50
// console.log(binarySearchTree.root.right.right); // null
// console.log(binarySearchTree.root.right.left); // null

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50)
//   .insert(60)
//   .insert(30)
//   .insert(25)
//   .insert(23)
//   .insert(24)
//   .insert(70);

// console.log(binarySearchTree);
// binarySearchTree.remove(10);
// console.log(binarySearchTree.root.left.value); // 12
// console.log(binarySearchTree.root.left.left.value); // 1
// console.log(binarySearchTree.root.left.left.right.value); // 5
// binarySearchTree.remove(50);
// console.log(binarySearchTree.root.right.value); // 20
// console.log(binarySearchTree.root.right.right.value); // 60
// console.log(binarySearchTree.root.right.right.left.value); // 30

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(22)
//   .insert(49)
//   .insert(85)
//   .insert(66)
//   .insert(95)
//   .insert(90)
//   .insert(100)
//   .insert(88)
//   .insert(93)
//   .insert(89)
//   .insert(97)

// binarySearchTree.remove(85);
// console.log(binarySearchTree.root.right.right.value); // 88
// console.log(binarySearchTree.root.right.right.right.left.left.value); // 89
// console.log(binarySearchTree.secondLargest().value); // 97
// binarySearchTree.insert(98);
// console.log(binarySearchTree.secondLargest().value); // 98
// binarySearchTree.insert(101);
// console.log(binarySearchTree.secondLargest().value); // 100

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50)
//   .insert(60)
//   .insert(30)
//   .insert(25)
//   .insert(23)
//   .insert(24)
//   .insert(70);

// binarySearchTree.remove(15);
// console.log(binarySearchTree.root.value); // 20
// console.log(binarySearchTree.root.left.left.value); // 1
// console.log(binarySearchTree.root.right.value); // 50
// binarySearchTree.remove(20);
// console.log(binarySearchTree.root.value); // 23
// console.log(binarySearchTree.root.right.left.left.left.value); // 24

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

console.log(binarySearchTree.isBalanced()); // true
binarySearchTree.remove(50);
console.log(binarySearchTree.isBalanced()); // false
