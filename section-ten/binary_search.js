console.log('1: ', binarySearch([1,2,3,4,5],2)); // 1
console.log('2: ', binarySearch([1,2,3,4,5],3)); // 2
console.log('4: ', binarySearch([1,2,3,4,5],5)); // 4
console.log('-1: ', binarySearch([1,2,3,4,5],6)); // -1
console.log('2: ', binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2
console.log('16: ', binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
console.log('-1: ', binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); // -1

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.ceil((right + left)/2);
    if (arr[middle] === target) return middle;
    else if (arr[middle] > target) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
}
