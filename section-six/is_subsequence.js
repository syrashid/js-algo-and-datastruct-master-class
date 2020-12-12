console.log(`Test Passed: ${isSubsequence('hello', 'hello world') === true}`);
console.log(`Test Passed: ${isSubsequence('sing', 'sting') === true}`);
console.log(`Test Passed: ${isSubsequence('abc', 'abracadabra') === true}`);
console.log(`Test Passed: ${isSubsequence('abc', 'acb') === false}`);

function isSubsequence(sub, full) {
  let pointer = 0;
  let subChars = sub.split('');
  for(let char of full.split('')) {
    if (char === subChars[pointer]) pointer++;
    if (pointer === subChars.length) return true;
  }
  return false;
}
