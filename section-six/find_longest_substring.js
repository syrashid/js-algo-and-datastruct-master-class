// console.log('0: ',findLongestSubstring('')); // 0
// console.log('7: ',findLongestSubstring('rithmschool')); // 7 rithmsc
console.log('6: ',findLongestSubstring('thisisawesome')); // 6 awesom
console.log('7: ',findLongestSubstring('thecatinthehat')); // 7 hecatin
console.log('1: ',findLongestSubstring('bbbbbb')); // 1 b
console.log('8: ',findLongestSubstring('longestsubstring')); // 8 ubstring
console.log('6: ',findLongestSubstring('thisishowwedoit')); // 6 wedoit

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    debugger;
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// function findLongestSubstring(str) {
//   // build pointer refs to define sliding window, max, window, and chars
//   let left = 0;
//   let right = 0;
//   let max = 0;
//   let chars = str.split('');
//   let window = chars.slice(left, (right + 1));

//   // while loop to check through growing and shrinking window
//   while (left < chars.length) {
//     if(unique(window) && right < chars.length) {
//       // Grow the window
//       max = Math.max(max, (right + 1) - left)
//       right++;
//       window = chars.slice(left, (right + 1));
//     } else if (!unique(window)) {
//       // Shrink the window
//       left++;
//       window = chars.slice(left, (right + 1));
//     } else {
//       // Break as needed
//       break;
//     }
//   }
//   // return standing max
//   return max;
// }

function unique(arr) {
  return new Set(arr).size === arr.length;
}

