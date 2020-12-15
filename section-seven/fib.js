console.log('3: ', fib(4));// 3
console.log('55: ', fib(10)); // 55
console.log('317811: ', fib(28)); // 317811
console.log('9227465: ', fib(35)); // 9227465

function fib(num){
  if (num == 1) return 1;
  if (num == 2) return 1;
  return fib(num - 1) + fib(num - 2)
}
