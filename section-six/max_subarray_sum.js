console.log(`Test Passed: ${maxSubarraySum([100,200,300,400], 2) === 700}`);
console.log(`Test Passed: ${maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) === 39}`);
console.log(`Test Passed: ${maxSubarraySum([-3,4,0,-2,6,-1], 2) === 5}`);
console.log(`Test Passed: ${maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) === 5}`);
console.log(`Test Passed: ${maxSubarraySum([2,3], 3) === null}`);

function maxSubarraySum(arr, target) {
  // Guard clause
  if (arr.length < target) return null;

  let max = 0;
  // Build the sliding window max
  for(let ele of arr.slice(0,target)) {
    max += ele;
  }
  // Iterate over the array to augment the max
  let tempMax = max;
  for(let i = 0; i < arr.length - target; i++) {
    tempMax = tempMax + arr[i + target] - arr[i];
    if (tempMax > max) max = tempMax;
  }
  return max;
}
