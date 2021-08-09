/**
 * 1. PermMissingElem
Find the missing element in a given permutation.
Task Score
100%
Correctness
100%
Performance
100%
Task description
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
 */
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let set = new Set();

  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    set.add(num);
  }

  const lastNumber = A.length + 1;
  for (let j = 1; j <= lastNumber; j++) {
    if (!set.has(j)) return j;
  }
}
