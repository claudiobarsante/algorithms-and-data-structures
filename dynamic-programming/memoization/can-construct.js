const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('eeeeeeeeeeeeeeeeef', ['ee', 'eeee', 'eeeeee']));
/*
 m = targetSum
 n = wordBank.length
 Brute force:
 Time: O(n^m *m)
 Space:O(m*m)
 After memoization
   Time: O(n* m^2) o segundo m é referente ao tempo p rodar o slice
    Space:O(m^2);

    
 */
