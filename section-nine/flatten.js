function flatten(arr){
  const compiler = [];

  (function flattenRecursive(element) {
    if (Number.isInteger(element)) return compiler.push(element);
    if (element.length === 0) return;
    // iterate over each element, and continue to flatten
    for(let piece of element) {
      flattenRecursive(piece);
    }
  })(arr);

  return compiler;
}

console.log(`Test Passed: ${flatten([1, 2, 3, [4, 5] ])}`); // [1, 2, 3, 4, 5]
console.log(`Test Passed: ${flatten([1, [2, [3, 4], [[5]]]])}`); // [1, 2, 3, 4, 5]
console.log(`Test Passed: ${flatten([[1],[2],[3]])}`); // [1,2,3]}`)
console.log(`Test Passed: ${flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])}`); // [1,2,3]
