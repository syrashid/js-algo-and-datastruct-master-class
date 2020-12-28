//console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeSort([5, 1, 4, 2, 8, 10, 50, 9, 14, 99, 100]));
console.log(mergeSort([5, 1, 2]));

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

function split(arr) {
  return [arr.slice(0, arr.length/2), arr.slice(arr.length/2)]
}

function mergeSort(arr) {
  // base case is when you get a single or empty arr, return arr
  // return merge function that is passed two recursive calls
  if (arr.length <= 1) return arr;
  // THIS NOTATION DOESN'T WORK, THIS ASSIGNS LEFT AND RIGHT TO (THE GLOBAL) THIS AS PROPERTIES AND VALUES
  // [left, right] = [...split(arr)]
  let [left, right] = [...split(arr)];
  return merge(mergeSort(left), mergeSort(right));
}
