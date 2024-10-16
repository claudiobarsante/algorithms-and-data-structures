// -- other solution
// -- I like this one
// -- O(n)
// -- s(n)
function solution(A, K) {
  // Implement your solution here
  const output = [];
  const arrayLength = A.length;
  for (let i = 0; i < arrayLength; i++) {
    const newPosition = (i + K) % arrayLength;
    output[newPosition] = A[i];
  }

  return output;
}

function solution(A, K) {
  if (A.length <= 1) return A;

  for (let i = 1; i <= K; i++) {
    const popped = A.pop();
    A.unshift(popped);
  }

  return A;
}

solution([1, 2, 3, 4], 4);

// -- Optomized version --------------------------------
function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const idx = K % A.length;

  function reverse(A, left, right) {
    while (left < right) {
      const temp = A[left];
      A[left] = A[right];
      A[right] = temp;
      left++;
      right--;
    }
    return A;
  }

  reverse(A, 0, A.length - 1);
  reverse(A, 0, idx - 1);
  reverse(A, idx, A.length - 1);

  return A;
}

/*Tasks Details
Easy
1. CyclicRotation
Rotate an array to the right by a given number of steps.
Task Score
100%
Correctness
100%
Performance
Not assessed
Task description
An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given

    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
*/
