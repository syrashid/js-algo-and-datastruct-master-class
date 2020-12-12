console.log(`Test Passed: ${sameFrequency(182, 281) === true}`);
console.log(`Test Passed: ${sameFrequency(34, 14) === false}`);
console.log(`Test Passed: ${sameFrequency(3589578, 5879385) === true}`);
console.log(`Test Passed: ${sameFrequency(22, 222) === false}`);

function sameFrequency(arg1, arg2) {
  return validAnagram(arg1.toString(), arg2.toString());
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
