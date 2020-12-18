console.log(quickSort([5, 1, 4, 2, 8, 10, 50, 9, 14, 99, 100]));
console.log(quickSort([5, 1, 2]));
console.log(pivot([ 5, 2, 1, 8, 5, 4, 7, 6, 3 ])) // should return 4

// will take the array, pivot around the first element, and return the correct index for the pivot
function swap(arr, pos1, pos2) {
  return [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const pivotVal = arr[start];
  let pivotInd = start;
  for(let i = start + 1; i < end + 1; i++ ) {
    if (pivotVal > arr[i]) {
      pivotInd++;
      swap(arr, i, pivotInd);
    }
  }
  swap(arr, start, pivotInd);
  return pivotInd;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end - start <= 0) return;
  let pivotInd = pivot(arr, start, end);
  // call on left and right
  // left subarray
  quickSort(arr, start, pivotInd - 1);
  // right subarray
  quickSort(arr, pivotInd + 1, end)

  return arr;
}

