console.log("Radix Sort");
console.log(radixSort([5, 1, 4, 2, 8, 10, 50, 9, 14, 99, 100]));
console.log(radixSort([5, 1, 2]));

console.log("");

console.log("Get Digit");
console.log('5: ', getDigit(12345, 0));
console.log('4: ', getDigit(12345, 1));
console.log('3: ', getDigit(12345, 2));
console.log('2: ', getDigit(12345, 3));
console.log('1: ', getDigit(12345, 4));
console.log('0: ', getDigit(12345, 5));
console.log('0: ', getDigit(12345, -1));
console.log('0: ', getDigit(12345, 100));

console.log("");

console.log("Digit Count");
console.log('1: ', digitCount(1));
console.log('2: ', digitCount(10));
console.log('3: ', digitCount(100));

console.log("");

console.log("Most Digits");
console.log('3: ',mostDigits([5, 1, 4, 2, 8, 10, 50, 9, 14, 99, 100]));

function radixSort(arr) {
  // Figure out the number of digits/ times to iterate
  let iter = mostDigits(arr);
  let result = arr;
  // Loop over that many times doing the following
  for(let i = 0; i < iter; i++) {
    // Create buckets 0 - 9
    const buckets = Array.from(Array(10), () => []);
    for(let j = 0; j < result.length; j++) {
      // Place numbers in said buckets based off digit
      const bucketInd = getDigit(result[j], i);
      buckets[bucketInd].push(result[j]);
    }
    // Flatten array and repeat process
    result = buckets.flat();
  }

  // return result
  return result;
}

function getDigit(num,place) {
  // numString = num.toString()
  // return parseInt(numString[numString.length - place - 1]) || 0
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitCount(num) {
  return num.toString().length
}

function mostDigits(arr) {
  let mostDigitCallback = (acc, cur) => Math.max(acc, digitCount(cur));
  return arr.reduce(mostDigitCallback, 0);
}
