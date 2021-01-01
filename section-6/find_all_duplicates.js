console.log(findAllDuplicates([4,3,2,7,8,2,3,1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1

function findAllDuplicates(arr) {
  const counter = new Map();
  const duplicates = [];
  for(let element of arr) {
    counter.has(element) ? counter.set(element, counter.get(element) + 1) : counter.set(element, 1);
  }
  counter.forEach((val, key) => {
    if (val > 1) duplicates.push(key);
  })
  return duplicates;
}
