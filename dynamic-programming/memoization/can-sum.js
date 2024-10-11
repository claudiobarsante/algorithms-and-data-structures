const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;

    if (canSum(targetSum, numbers, memo) === true) {
      memo[remainder] = true;
      return true;
    }
  }
  console.log('memo ', memo);
  memo[targetSum] = false;
  return false;
};

//console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(300, [7, 14]));
//?
//m = targetSum
//n = array length

//time:O(n^m)
//space:O(m)
//=>
//time;O(m*n)
//space;O(m)
