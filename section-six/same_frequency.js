console.log(`Test Passed: ${sameFrequency(182, 281) === true}`);
console.log(`Test Passed: ${sameFrequency(34, 14) === false}`);
console.log(`Test Passed: ${sameFrequency(3589578, 5879385) === true}`);
console.log(`Test Passed: ${sameFrequency(22, 222) === false}`);

function sameFrequency(arg1, arg2) {
  const digits1 = ("" + arg1).split('');
  const digits2 = ("" + arg2).split('');
  return validAnagram(digits1, digits2);
}


function validAnagram(word1, word2) {
  const freq = {}

  for(let char of word1.split('')) {
    freq[char] = (freq[char] || 0) +  1;
  }

  for(let char of word2.split('')) {
    freq[char] = (freq[char] || 0) -  1;
  }

  for(key in freq) {
    if (freq[key] !== 0) return false;
  }
  return true;
}
