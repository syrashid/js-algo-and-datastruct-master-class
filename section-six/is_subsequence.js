console.log(`Test Passed: ${isSubsequence('hello', 'hello world') === true}`);
console.log(`Test Passed: ${isSubsequence('sing', 'sting') === true}`);
console.log(`Test Passed: ${isSubsequence('abc', 'abracadabra') === true}`);
console.log(`Test Passed: ${isSubsequence('abc', 'acb') === false}`);

function isSubsequence(sub, full) {
  // set up pointer on sub string
  let pointer = 0;
  // iterate over chars of full string
    // as characters match, move pointer up
    // if characters don't match, keep iterating
  // if pointer is greater than sub string length return false
  // if you can iterate all the way thru and pointer reaches end return true
}
