const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return memo[targetSum].length;
};

console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(8, [2, 3, 5])); //[3,5]
console.log(bestSum(8, [1, 4, 5])); //[4,4]
console.log(bestSum(100, [1, 2, 5, 25]));
console.log(bestSum(11, [1, 2, 5]));

/*
m = targetSum
n = numbers.length
Brute force:
Time : O(n^m *m) = branch factor n exponential to the hight of the tree = targetSum * 
a operação de cópia do array de combinação q pode ter o tamanho máximo de m(pior cenário um monte de 1 até chegar ao total)
Space : O(m * m) para cada chamada recursiva vc vai ter o shortest q armazena a menor combinação

Memoized:
Time:O(m * n * m) o último m é por causa do memo, q vc pode ter um tamanho de até m q serão as chaves
Space(m^2) q vem do memo, pq memo pode ter m keys e cada key pode ter um array do tamanho m

*/
