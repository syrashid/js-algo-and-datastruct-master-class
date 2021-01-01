console.log(1, findRotatedIndex([3,4,1,2],4)); // 1
console.log(2, findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(6, findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(-1, findRotatedIndex([37,44,66,77,102,10,22],14));// -1
console.log(-1, findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));// -1
console.log(5, findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)); // 5

function findRotatedIndex (arr, target) {
  const pivot = findPivot(arr);

  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot);

  if (target > arr[arr.length - 1]) {
    return binarySearch(left, target);
  } else {
    const rightIdx = binarySearch(right, target);
    return rightIdx === -1 ? -1 : left.length + rightIdx;
  }
}

function findPivot(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.ceil((right + left)/2);
    if (arr[middle] < arr[middle - 1]) return middle;
    (arr[middle] > arr[0]) ? left = middle + 1: right = middle - 1;
  }

  return -1;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const middle = Math.ceil((right + left)/2);
    if (arr[middle] === target) return middle;
    (arr[middle] > target) ? right = middle - 1 : left = middle + 1;
  }

  return -1;
}
