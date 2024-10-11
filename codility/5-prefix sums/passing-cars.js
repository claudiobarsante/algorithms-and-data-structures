/*
1. PassingCars
Count the number of passing cars on the road.
Task Score
100%
Correctness
100%
Performance
100%
Task description
A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.*/

/*
SOLUTION
========
We need to define two variables and count separately ones and zeroes.
Each time we meet 1(one) we add to number of COUNT the number of zeroes which were passed by so far. 
Thus we getting number of pairs passed by at the moment. When we reach end of the array we will have full number of the pairs.
*/

function solution(A) {
  let count = 0;
  let zeros = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      zeros++;
    } else {
      count += zeros;
    }

    if (count > 1000000000) return -1;
  }

  return count;
}

console.log(solution([0, 1, 0, 1, 1]));

// -- sufix sum solution --------------------------------

function sufixSum(arr) {
  let sum = new Array({ length: arr.length }, () => []);

  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      sum[i] = arr[i];
    } else {
      sum[i] = arr[i] + sum[i + 1];
    }
    if (arr[i] === 0) count += sum[i];
    if (count > 1000000000) return -1;
  }
  return count;
}

console.log(sufixSum([0, 1, 0, 1, 1]));
