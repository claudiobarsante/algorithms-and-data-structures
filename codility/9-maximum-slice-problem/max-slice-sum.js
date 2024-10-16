/**
 * 1. MaxSliceSum
Find a maximum sum of a compact subsequence of array elements.
Task Score
100%
Correctness
100%
Performance
100%
Task description
A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A. The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns the maximum sum of any slice of A.

For example, given array A such that:

A[0] = 3  A[1] = 2  A[2] = -6
A[3] = 4  A[4] = 0
the function should return 5 because:

(3, 4) is a slice of A that has sum 4,
(2, 2) is a slice of A that has sum −6,
(0, 1) is a slice of A that has sum 5,
no other slice of A has sum greater than (0, 1).
Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..1,000,000];
each element of array A is an integer within the range [−1,000,000..1,000,000];
the result will be an integer within the range [−2,147,483,648..2,147,483,647].
 */
// write your code in JavaScript (Node.js 8.9.4)
if (A.length === 1) return A[0];

let maxSum = A[0];
let partialSum = A[0];

for (let i = 1; i < A.length; i++) {
  if (partialSum + A[i] > A[i]) {
    partialSum += A[i];
  } else {
    partialSum = A[i];
  }
  maxSum = Math.max(maxSum, partialSum);
}

return maxSum;
//Kadane's Algorithm - Maximum Sum Subarray
//Videos -
//https://www.youtube.com/watch?v=jnoVtCKECmQ&ab_channel=NickWhite
// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
