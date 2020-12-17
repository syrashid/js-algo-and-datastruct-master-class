console.log(bubbleSort([5, 1, 4, 2, 8])) // [1, 2, 4, 5, 8]
console.log(swap([1,2], 0, 1)) // [2, 1]

function bubbleSort(arr) {
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) swap(arr, j, j+1);
    }
  }
  return arr;
}

function swap(arr, pos1, pos2) {
  return [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]
}
