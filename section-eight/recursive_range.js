
console.log('21: ', recursiveRange(6)); // 21
console.log('55: ', recursiveRange(10)); // 55

function recursiveRange(num){
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}
