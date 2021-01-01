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
    // Case 1: Root Removal
    // Case 2: Leaf
    // Case 3: Has 1 Child
    // Case 4: Has 2 Children
    if(!parent) {

    } else if (node.left === null && node.right === null) {
      parent.left === node ? parent.left = null : parent.right = null;
    } else if (node.left !== null || node.right !== null) {

    } else {

    }
  }
}


var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);


binarySearchTree.remove(50);
console.log(binarySearchTree.root.right.value); // 20
console.log(binarySearchTree.root.right.right); // null
binarySearchTree.remove(5);
console.log(binarySearchTree.root.left.left.value); // 1
console.log(binarySearchTree.root.left.left.right); // null

//var binarySearchTree = new BinarySearchTree();binarySearchTree .insert(15) .insert(20) .insert(10) .insert(12) .insert(1) .insert(5) .insert(50);binarySearchTree.remove(1);binarySearchTree.root.left.left.value // 5binarySearchTree.root.left.left.left // nullbinarySearchTree.root.left.left.right // nullbinarySearchTree.remove(20);binarySearchTree.root.right.value // 50binarySearchTree.root.right.right // nullbinarySearchTree.root.right.left // nullvar binarySearchTree = new BinarySearchTree();binarySearchTree .insert(15) .insert(20) .insert(10) .insert(12) .insert(1) .insert(5) .insert(50) .insert(60) .insert(30) .insert(25) .insert(23) .insert(24) .insert(70);binarySearchTree.remove(10);binarySearchTree.root.left.value // 12binarySearchTree.root.left.left.value // 1binarySearchTree.root.left.left.right.value // 5binarySearchTree.remove(50);binarySearchTree.root.right.value // 20binarySearchTree.root.right.right.value // 60binarySearchTree.root.right.right.left.value // 30var binarySearchTree = new BinarySearchTree();binarySearchTree .insert(22) .insert(49) .insert(85) .insert(66) .insert(95) .insert(90) .insert(100) .insert(88) .insert(93) .insert(89)binarySearchTree.remove(85);binarySearchTree.root.right.right.value // 88binarySearchTree.root.right.right.right.left.left.value // 89
