console.log( {
  2: countUniqueValues([1,1,1,1,1,2]),
  7: countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]),
  0: countUniqueValues([]),
  4: countUniqueValues([-2,-1,-1,0,1]),
  1: countUniqueValues([1])
})

function countUniqueValues (arr) {
  // guard clause for 1
  if(arr.length === 0) return 0
  // assign pointers & counter
  let counter = 1;
  let left = 0;
  // iterate until right hits the end
  for(let right = 1; right < arr.length; right++) {
    // whenever they're different, match left to right, and increment
    if(arr[left] !== arr[right]) {
      left = right;
      counter++;
    }
    // whenever they match, increment
  }
  return counter;
}
