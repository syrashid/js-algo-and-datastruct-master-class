console.log(merge([1, 10, 50], [2, 14, 99, 100]));

function merge(arr1, arr2) {
  // i is for arr1, j is for arr2
  let i = 0;
  let j = 0;
  let mergeArr = [];

  // while i and j are not at the end
  while (i < arr1.length || j < arr2.length) {
    // check if either are finished, if so push all in
    if (i >= arr1.length) {
      mergeArr = mergeArr.concat(arr2.slice(j));
      j = arr2.length
    } else if (j >= arr2.length) {
      mergeArr = mergeArr.concat(arr1.slice(i));
      i = arr1.length;
    } else {
      // otherwise compare, push in, and increment
      if (arr1[i] >= arr2[j]) {
        mergeArr.push(arr2[j]);
        j++
      } else {
        mergeArr.push(arr1[i]);
        i++;
      }
    }
  }
  return mergeArr;
}
