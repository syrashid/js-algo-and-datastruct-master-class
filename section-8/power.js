console.log('1: ',power(2,0)); // 1
console.log('4: ',power(2,2)); // 4
console.log('16: ',power(2,4)); // 16

function power(base,pow) {
  if (pow === 0) return 1;
  return base * power(base, pow - 1);
}
