console.log(2, minSubArrayLen([2,3,1,2,4,3], 7)) // 2 - because [4,3] is the smallestsubarray
console.log(2, minSubArrayLen([2,1,6,5,4], 9)) // 2 - because [5,4] is the smallestsubarray
console.log(1, minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 - because [62] is greater than 52
console.log(3, minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(5, minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(2, minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(0, minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0

function minSubArrayLen(arr, max) {
  // sum all elements in the array
  let windowMax = 0;
  for(let ele of arr) {
    windowMax += ele;
  }
  // return 0 if unable to meet target
  if (windowMax < max) return 0;
  // create left and right pointers
  let left = 0;
  let right = arr.length - 1;
  let shifted = true;
  // if window is whittled, continue to whittle
  while (shifted) {
    // left or right movement will depend on which one leaves you the greatest windowMax, aka whichever one is smaller will get the hack
    // check if taking off left puts you under, react accordingly
    // check if taking off right puts you under, react accordingly
    shifted = false;
    if (windowMax - arr[left] >= max && arr[right] >=  arr[left]) {
      windowMax = windowMax - arr[left];
      left++;
      shifted = true;
    } else if (windowMax - arr[right] >= max && arr[right] < arr[left]) {
      windowMax = windowMax - arr[right];
      right--;
      shifted = true;
    }
  }
  // return left - right after  you exit while loop
  return right - left + 1;
}
