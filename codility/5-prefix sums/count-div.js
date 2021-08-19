/*
1. CountDiv
Compute number of integers divisible by k in range [a..b].
Task Score
100%
Correctness
100%
Performance
100%
Task description
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
*/
function solution(A, B, K) {
  // ceil the first element and divide with K
  let start = Math.ceil(A / K);
  // floor the last element and divide with K
  let end = Math.floor(B / K);

  //formula (end-start) + 1;

  return end - start + 1;
}
