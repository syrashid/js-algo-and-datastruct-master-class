console.log('0: ',findLongestSubstring('')); // 0
console.log('7: ',findLongestSubstring('rithmschool')); // 7
console.log('6: ',findLongestSubstring('thisisawesome')); // 6
console.log('7: ',findLongestSubstring('thecatinthehat')); // 7
console.log('1: ',findLongestSubstring('bbbbbb')); // 1
console.log('8: ',findLongestSubstring('longestsubstring')); // 8
console.log('6: ',findLongestSubstring('thisishowwedoit')); // 6

function findLongestSubstring(str) {
  // Break array into chars and build frequency map
  const chars = str.split('');
  const freqMap = buildFreqMap(chars);
  // Set left and right pointers
  let left = 0;
  let right = chars.length - 1;
  let shifted = true;
  // While window can be shifted
  while (shifted) {
    // reduce window based on pointer value and frequency map
    shifted = false;
  }

  // return diff between left and right pointer
  return right - left + 1;
}

function buildFreqMap(arr) {
  const freq = {}

  for(let char of arr) {
    freq[char] = (freq[char] || 0) +  1;
  }

  return freq;
}
