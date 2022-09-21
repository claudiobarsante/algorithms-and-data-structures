function getChange(price, gived) {
  const coins = [0.01, 0.05, 0.1, 0.25, 0.5, 1];

  let result = Array.from({ length: coins.length }, () => 0);
  let change = (gived - price).toPrecision(2);

  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];

    if (coin <= change) {
      const used = Math.floor(change / coin);

      result[i] = used;
      change = change - used * coin;
    }
  }

  return result;
}

console.log(getChange(3.1, 5));
