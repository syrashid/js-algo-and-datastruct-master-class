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

console.log(simpleAddUpTo(5));
console.log(addUpTo(5));
