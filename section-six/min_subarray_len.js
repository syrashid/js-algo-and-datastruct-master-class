console.log(2, minSubArrayLen([2,3,1,2,4,3], 7)) // 2 - because [4,3] is the smallestsubarray
console.log(2, minSubArrayLen([2,1,6,5,4], 9)) // 2 - because [5,4] is the smallestsubarray
console.log(1, minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 - because [62] is greater than 52
console.log(3, minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(5, minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(2, minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(0, minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0

function minSubArrayLen(arr, target) {
  // sum all elements in the array
  // return 0 if unable to meet target
  // create left and right pointers
  // while left and right dont cross over, whittle window down
    // check if taking off left puts you under, react accordingly
    // check if taking off right puts you under, react accordingly
  // return left - right after  you break out of while loop
}
