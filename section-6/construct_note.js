console.log('Passed: ', !constructNote('aa', 'abc')); // false
console.log('Passed: ', constructNote('abc', 'dcba')); // true
console.log('Passed: ', constructNote('aabbcc', 'bcabcaddff')); // true

function constructNote(note, letters) {
  // Build a freqCounter
  const counter = new Map();
  for(let char of letters.split('')) {
    counter.has(char) ? counter.set(char, counter.get(char) + 1) : counter.set(char, 1);
  }

  // Check through note
  for(let char of note.split('')) {
    if (!counter.has(char)) return false;

    counter.set(char, counter.get(char) - 1)
    if (counter.get(char) < 0) return false;
  }
  return true;
}
