const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let count = 0;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      if (countConstruct(suffix, wordBank, memo) === 1) {
        count += 1;
      }
    }
  }
  memo[target] = count;
  return count;
};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
