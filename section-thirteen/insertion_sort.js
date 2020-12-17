console.log(insertionSort([5, 1, 4, 2, 8])) // [1, 2, 4, 5, 8]

function insertionSort(arr) {
  const compiler = [arr[0]];
  (function recursiveInsert(recArr) {
    if (recArr.length === 0) return;
    for(let i = 0; i < compiler.length; i++) {
      if (compiler[i] > recArr[0]) {
        compiler.splice(i, 0, recArr[0]);
        break;
      } else if ( i === compiler.length - 1) {
        compiler.push(recArr[0]);
        break;
      }

    }
    recursiveInsert(recArr.slice(1));
  })(arr.slice(1));
  return compiler;
}
