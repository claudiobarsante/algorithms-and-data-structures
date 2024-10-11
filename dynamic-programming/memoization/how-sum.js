const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSum(300, [7, 14]));
//m =  target sum
//n = numbers.length
//
//Brute Force
//time:O(n^m *m) eu multiplico por m por causa da operação do array p guardar as combinações
//O(m)
//Memoized
//time:O(n*m*m);
//space:O(m*m)
