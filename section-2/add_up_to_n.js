const performance = require('perf_hooks').performance;

const addUpTo = (n) => {
  let total = 0;
  for(i=0; i<=n; i++) {
    total += i;
  }
  return total;
}


const simpleAddUpTo = (n) => {
  return n * (n + 1) / 2
}

// console.log(simpleAddUpTo(5));
// console.log(addUpTo(5));

const t0 = performance.now();
addUpTo(1000000000);
const t1 = performance.now();
console.log(`Time elapsed for complex add function is ${t1 - t0} milliseconds`);

const p0 = performance.now();
simpleAddUpTo(1000000000);
const p1 = performance.now();
console.log(`Time elapsed for simple add function is ${p1 - p0} milliseconds`);
