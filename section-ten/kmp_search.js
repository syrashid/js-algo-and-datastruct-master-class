// Both functions in this code use the multi pointer approach

function kmpStringSearch(str, pattern) {
  const suffArray = buildSuffixArray(pattern);
  let i = 0;
  let j = 0;
  let count = 0;

  while (i < str.length) {
    if (str[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        count++;
        j = 0;
        i++;
      } else {
        j++;
        i++;
      }
    } else {
      if (j !== 0) {
        j = suffArray[j - 1]
      } else {
        i++
      }

    }
  }
  return count;
}


// To see how I build this wonderful array, watch this youtube video below:
// https://www.youtube.com/watch?v=GTJr8OvyEVQ
function buildSuffixArray(pattern) {
  arr = [0]
  let i = 1;
  let j = 0;

  while (i < pattern.length) {
    if (pattern[i] !== pattern[j]) {
      if (j === 0) {
        arr.push(0);
        i++
      } else {
        j = arr[j - 1];
      }
    }
    else {
      arr.push(j + 1);
      j++;
      i++;
    }
  }
  return arr;
}

console.log(buildSuffixArray('abcdabca')); // [0, 0, 0, 0, 1, 2, 3, 1]
console.log(buildSuffixArray('aabaabaaa')); // [0, 1, 0, 1, 2, 3, 4, 5, 2]
console.log(buildSuffixArray('bxb')); // [0, 1, 0, 1, 2, 3, 4, 5, 2]

console.log("Test Passed: ", kmpStringSearch("wowomgzomgwomgw", "omg") === 3)
console.log("Test Passed: ", kmpStringSearch("abxabcabcaby", "abcaby") === 1)
