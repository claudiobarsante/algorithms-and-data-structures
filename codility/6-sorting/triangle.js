/**
 * 1. Triangle
Determine whether a triangle can be built from a given set of edges.
Task Score
100%
Correctness
100%
Performance
100%
Task description
An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 */

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 3) return 0;

  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    const p = A[i];
    const q = A[i + 1];
    const r = A[i + 2];

    if (p + q > r && q + r > p && r + p > q) return 1;
  }

  return 0;
}
