// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log('true: ', someRecursive([1,2,3,4], isOdd)); // true
console.log('true: ', someRecursive([4,6,8,9], isOdd)); // true
console.log('false: ', someRecursive([4,6,8], isOdd)); // false
console.log('false: ', someRecursive([4,6,8], val => val > 10)); // false

function someRecursive(arr, callback){
  let returnBool = false;

  (function helpRecurse(arr, callback) {
    if (arr.length === 0) return;
    if (callback(arr[0])) returnBool = true;
    helpRecurse(arr.slice(1), callback);
  })(arr, callback);

  return returnBool;
}
