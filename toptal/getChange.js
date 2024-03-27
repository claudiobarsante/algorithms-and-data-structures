function getChange(price, gived) {
  const coins = [0.01, 0.05, 0.1, 0.25, 0.5, 1];

  const result = Array.from({ length: coins.length }, () => 0);

  let change = gived - price;

  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];

    if (coin <= change) {
      const used = Math.floor(change / coin);
      change = change - used * coin;
      result[i] = used;
    }
  }
  return result;
}

console.log(getChange(3.1, 5));
