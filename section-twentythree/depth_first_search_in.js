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
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(20);
tree.insert(3);
tree.insert(8);

console.log(depth_first_search_in(tree));

function depth_first_search_in(tree) {
  const visited = [];

  (function traverse(node) {
    if (node.left) traverse(node.left);
    visited.push(node.value);
    if (node.right) traverse(node.right);

  })(tree.root);

  return visited;
}

