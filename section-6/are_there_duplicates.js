console.log( `Test Passing: ${areThereDuplicates(1, 2, 3) === false}`);
console.log( `Test Passing: ${areThereDuplicates(1, 2, 2) === true}`);
console.log( `Test Passing: ${areThereDuplicates('a', 'b', 'c', 'a') === true}`);


function areThereDuplicates() {
  const freq = {};
  for(let arg of arguments) {
    freq[arg] = (freq[arg] || 0) +  1;
  }

  for(let key in freq) {
    if (freq[key] !== 1) return true;
  }
  return false;
}
