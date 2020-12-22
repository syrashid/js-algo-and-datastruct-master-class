console.log(radixSort([5, 1, 4, 2, 8, 10, 50, 9, 14, 99, 100]));
console.log(radixSort([5, 1, 2]));

console.log('5:', getDigit(12345, 0));
console.log('4:', getDigit(12345, 1));
console.log('3:', getDigit(12345, 2));
console.log('2:', getDigit(12345, 3));
console.log('1:', getDigit(12345, 4));
console.log('0:', getDigit(12345, 5));
console.log('0:', getDigit(12345, -1));
console.log('0:', getDigit(12345, 100));

function radixSort(arr) {

}

function getDigit(num,place) {
  // numString = num.toString()
  // return parseInt(numString[numString.length - place - 1]) || 0
}
