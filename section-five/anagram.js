// Test Cases

console.log(`Test Passed: ${validAnagram('', '') === true}`);
console.log(`Test Passed: ${validAnagram('aaz', 'zza') === false}`);
console.log(`Test Passed: ${validAnagram('anagram', 'nagaram') === true}`);
console.log(`Test Passed: ${validAnagram("rat","car") === false}`);
console.log(`Test Passed: ${validAnagram('awesome', 'awesom') === false}`);
console.log(`Test Passed: ${validAnagram('qwerty', 'qeywrt') === true}`);
console.log(`Test Passed: ${validAnagram('texttwisttime', 'timetwisttext') === true}`);



function validAnagram(word1, word2) {
  return false;
}
