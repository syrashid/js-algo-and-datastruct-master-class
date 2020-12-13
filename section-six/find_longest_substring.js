console.log('0: ',findLongestSubstring('')); // 0
console.log('7: ',findLongestSubstring('rithmschool')); // 7
console.log('6: ',findLongestSubstring('thisisawesome')); // 6
console.log('7: ',findLongestSubstring('thecatinthehat')); // 7
console.log('1: ',findLongestSubstring('bbbbbb')); // 1
console.log('8: ',findLongestSubstring('longestsubstring')); // 8
console.log('6: ',findLongestSubstring('thisishowwedoit')); // 6

function findLongestSubstring(str) {
  // Break array into chars and build frequency map
  const freq = {}

  for(let char of str.split('')) {
    freq[char] = (freq[char] || 0) +  1;
  }
  console.log(freq);
  // Set left and right pointers
  // While window can be shifted
    // reduce window based on pointer value and frequency map
  // return diff between left and right pointer
}
