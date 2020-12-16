function kmpStringSearch(str, pattern) {

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
console.log(buildSuffixArray('aabaabaaa')); // [0, ]

console.log("Test Passed: ", kmpStringSearch("wowomgzomgwomgw", "omg") === 3)
