function capitalizeFirst (arr) {
  if (arr.length === 0) return [];
  let capArr = [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)];
  capArr = capArr.concat(capitalizeFirst(arr.slice(1)));
  return capArr;
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
