function naiveStringSearch(str, subStr) {
  strChars = str.split('');
  subStrChars = subStr.split('');
  count = 0;

  for(let i = 0; i < strChars.length; i++) {
    for(let j = 0; j < subStrChars.length; j++) {
      if (strChars[i + j] !== subStrChars[j]) break;
      if (j === subStrChars.length - 1) count++;
    }
  }
  return count;
}

console.log("Test Passed: ", naiveStringSearch("wowomgzomgwomgw", "omg") === 3)
