const denominations = [1, 5, 10, 25]

console.log('Combos: ', coinChange(denominations, 1)); // 1
console.log('Combos: ', coinChange(denominations, 2)); // 1
console.log('Combos: ', coinChange(denominations, 5)); // 2
console.log('Combos: ', coinChange(denominations, 10)); // 4
console.log('Combos: ', coinChange(denominations, 25)); // 13
console.log('Combos: ', coinChange(denominations, 45)); // 39
console.log('Combos: ', coinChange(denominations, 100)); // 242
console.log('Combos: ', coinChange(denominations, 145)); // 622
console.log('Combos: ', coinChange(denominations, 1451)); // 425663
console.log('Combos: ', coinChange(denominations, 5000)); // 16892551
console.log('Combos: ', coinChange(denominations, 8001)); // 68844081

function coinChange(denos, amount, idx = 0, memo = new Map()) {
  if (amount < 0) return 0;
  if (amount === 0) return 1;
  if (memo.has([amount,idx].toString())) return memo.get([amount,idx].toString());

  if (amount > 0 && idx === denos.length) return 0;

  total = coinChange(denos, amount - denos[idx], idx, memo) + coinChange(denos, amount, idx + 1, memo)
  memo.set([amount,idx].toString(), total);
  return total;
}
