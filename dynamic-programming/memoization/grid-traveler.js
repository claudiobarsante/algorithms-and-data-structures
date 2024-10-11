const gridTraveler = (m, n, memo = {}) => {
  //? Either (2,1) or (1,2) have the same basecase
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  //basecase
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

  return memo[key];
};
//
//time: O(2^m+n)
//space:O(n+m)
//   ||
//   time:O(m*n)
//   space:O(n+m)

console.log(gridTraveler(2, 3));
console.log(gridTraveler(1, 3));
console.log(gridTraveler(18, 18));
