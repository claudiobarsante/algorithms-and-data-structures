/*
1. CountFactors
Count factors of given number n.
Task Score
100%
Correctness
100%
Performance
100%
Task description
A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

Write a function:

function solution(N);

that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
*/

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (N === 1) return 1;

  let count = 0;
  let i = 1;

  while (i * i < N) {
    if (N % i === 0) count += 2;
    i++;
  }

  if (i * i === N) count += 1;

  return count;
}

console.log(solution(24));

/*
 Tip
 Let’s count the number of divisors of n. The easiest approach is to iterate through all the
 numbers from 1 to n and check whether or not each one is a divisor. The time complexity of
 this solution is O(n).
 There is a simple way to improve the above solution. Based on one divisor, we can find
 the symmetric divisor. More precisely, if number a is a divisor of n, then n
 a is also a divisor.
 One of these two divisors is less than or equal to √n. (If that were not the case, n would be
 a product of two numbers greater than √n, which is impossible.)
 1 2 3 4 6 9 12 18 36
 Thus, iterating through all the numbers from 1 to √n allows us to find all the divisors. If
 number n is of the form k2, then the symmetric divisor of k is also k. This divisor should be
 counted just once.
 */
