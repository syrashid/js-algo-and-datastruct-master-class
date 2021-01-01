console.log(4, sortedFrequency([1,1,2,2,2,2,3],2)); // 4
console.log(1, sortedFrequency([1,1,2,2,2,2,3],3)); // 1
console.log(2, sortedFrequency([1,1,2,2,2,2,3],1)); // 2
console.log(-1, sortedFrequency([1,1,2,2,2,2,3],4)); // -1

function sortedFrequency(arr, target) {
  const start = findStart(arr, target);
  const end = findEnd(arr, target);
  if (start === -1 && end === -1) return -1;
  else if (start === -1) return arr.slice(0, end + 1).length;
  else if (end === -1) return arr.slice(start).length;
  else return end - start + 1;

}

function findStart(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const middle = Math.ceil((right + left)/2);
    if (arr[middle] === target && arr[middle - 1] < target) return middle;
    (arr[middle] >= target) ? right = middle - 1: left = middle + 1;
  }
  return -1;
}

function findEnd(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.ceil((right + left)/2);
    if (arr[middle] === target && arr[middle + 1] > target) return middle;
    (arr[middle] > target) ? right = middle - 1: left = middle + 1;
  }
  return -1;
}
