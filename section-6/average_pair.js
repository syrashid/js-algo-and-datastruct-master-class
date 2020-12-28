console.log(`Test Passed: ${averagePair([1,2,3], 2.5) === true}`);
console.log(`Test Passed: ${averagePair([1,3,3,5,6,7,10,12,19], 8) === true}`);
console.log(`Test Passed: ${averagePair([-1,0,3,4,5,6], 4.1) === false}`);
console.log(`Test Passed: ${averagePair([], 4) === false}`);

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    if (target === (arr[left] + arr[right])/2.0) return true;
    target > (arr[left] + arr[right])/2.0 ? left++ : right--;
  }
  return false;
}
