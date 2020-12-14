console.log('0: ',findLongestSubstring('')); // 0
console.log('7: ',findLongestSubstring('rithmschool')); // 7 rithmsc
console.log('6: ',findLongestSubstring('thisisawesome')); // 6 awesom
console.log('7: ',findLongestSubstring('thecatinthehat')); // 7 hecatin
console.log('1: ',findLongestSubstring('bbbbbb')); // 1 b
console.log('8: ',findLongestSubstring('longestsubstring')); // 8 ubstring
console.log('6: ',findLongestSubstring('thisishowwedoit')); // 6 wedoit

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


// Window starts with whole string
// Use set and check if it's equal to string, if not recurse one down going one off the left pointer and one off the right, return when you get the matching one
// Feels like the complexity of that is greater than O(n)
