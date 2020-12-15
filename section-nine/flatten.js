function flatten(arr){
}

console.log(`Test Passed: ${flatten([1, 2, 3, [4, 5] ])}`) // [1, 2, 3, 4, 5]
console.log(`Test Passed: ${flatten([1, [2, [3, 4], [[5]]]])}`) // [1, 2, 3, 4, 5]
console.log(`Test Passed: ${flatten([[1],[2],[3]]) // [1,2,3]}`)
console.log(`Test Passed: ${flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])}`) // [1,2,3]
