const coinChange = coins => {
  const sortedCoins = coins.sort((a, b) =>  a < b ? -1 : 1)
  let minimumChange = 1;

  for(i = 0; i < sortedCoins.length && sortedCoins[i] <= minimumChange; i++) {
    minimumChange = minimumChange + sortedCoins[i]
  }

  return minimumChange;
}

console.log(coinChange([5, 7, 1, 1, 2, 3, 22]));

console.log(coinChange([1, 1, 1, 1, 1]));

console.log(coinChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));