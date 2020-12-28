function capitalizeWords (arr) {
  if (arr.length === 0) return [];
  let capArr = [arr[0].toUpperCase()];
  capArr = capArr.concat(capitalizeWords(arr.slice(1)));
  return capArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
