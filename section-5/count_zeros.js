console.log(2, countZeroes([1,1,1,1,0,0])); // 2
console.log(4, countZeroes([1,0,0,0,0])); // 4
console.log(3, countZeroes([0,0,0])); // 3
console.log(0, countZeroes([1,1,1,1])); // 0

function countZeroes(arr) {
  const index = modBinarySearch(arr);
  if (index === -1 && arr[0] === 0) return arr.length;
  else if (index === -1) return 0;
  return arr.splice(index).length;
}

function modBinarySearch(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.ceil((right + left)/2);
    if (arr[middle] === 0 && arr[middle - 1] === 1) return middle;
    (arr[middle] > 0) ? left = middle + 1: right = middle - 1;
  }
  return -1;
}
