console.log('1: ',factorial(1)); // 1
console.log('2: ',factorial(2)); // 2
console.log('24: ',factorial(4)); // 24
console.log('5040: ',factorial(7)); // 5040

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
