console.log(selectionSort([5, 1, 4, 2, 8])) // [1, 2, 4, 5, 8]
console.log(swap([1,2], 0, 1)) // [2, 1]

function selectionSort(arr) {
 let mindex;
 for(let i = 0; i < arr.length; i++) {
   mindex = i;
   for(let j = i; j< arr.length; j++) {
    if (arr[mindex] > arr[j]) mindex = j;
   }
   swap(arr, mindex, i)
 }
 return arr;
}

function swap(arr, pos1, pos2) {
  return [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]
}
