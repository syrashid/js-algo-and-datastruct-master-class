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
}
