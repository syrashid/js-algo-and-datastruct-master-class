console.log('0: ',findLongestSubstring('')); // 0
console.log('7: ',findLongestSubstring('rithmschool')); // 7 rithmsc
console.log('6: ',findLongestSubstring('thisisawesome')); // 6 awesom
console.log('7: ',findLongestSubstring('thecatinthehat')); // 7 hecatin
console.log('1: ',findLongestSubstring('bbbbbb')); // 1 b
console.log('8: ',findLongestSubstring('longestsubstring')); // 8 ubstring
console.log('6: ',findLongestSubstring('thisishowwedoit')); // 6 wedoit

function findLongestSubstring(str) {
  // build pointer refs to define sliding window & standing max
  let left = 0;
  let right = 0;
  let max = 0;
  chars = str.split('');
  // while loop to check through growing window
  while (left < chars.length) {
    // Grow the window

    // Shrink the window
    // Break as needed
  }
  // return standing max
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
