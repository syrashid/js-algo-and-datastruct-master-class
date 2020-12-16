function nestedEvenSum(obj) {
  // Establish sum variable
  let sum = 0;
  // Iterate through each part of the object
  for (const key in obj) {
    if (Number.isInteger(obj[key]) && obj[key] % 2 === 0) sum += obj[key];
    // Dig thru as necessary
    if (obj[key] instanceof Object) {

    }
  }

  function dig(nestObj) {

  }

  // Return sum
  return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log('6: ', nestedEvenSum(obj1)); // 6
console.log('10: ', nestedEvenSum(obj2)); // 10
