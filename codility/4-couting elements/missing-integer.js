/**
 * MissingInteger
Find the smallest positive integer that does not occur in a given sequence.
Task Score
100%
Correctness
100%
Performance
100%
Task description
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

// -- TIP
// note: the missing number is not possible bigger than (A.length)
// because there are only (A.length) numbers  // means: there are no missing numbers from 1 to A.length
// Therefore, the missing number is "A.length+1" (important)

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let last = A.length;

  let set = new Set();

  for (let i = 1; i <= last; i++) {
    set.add(i);
  }

  for (let j = 0; j < A.length; j++) {
    const num = A[j];
    if (set.has(num)) set.delete(num);
  }

  if (set.size === 0) return last + 1;

  const setValues = set.values();
  const val = setValues.next();
  return val.value;
}

// -- or

function preferedSolution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  //special case
  if (A.length === 0) return 1;

  const length = A.length;

  // Using "set" to check if an element has appeared
  let nums = new Set();

  for (let i = 0; i < length; i++) {
    nums.add(A[i]);
  }

  // note: the missing number is not possible bigger than (A.length)
  // because there are only (A.length) numbers
  for (let i = 1; i <= length; i++) {
    if (!nums.has(i)) return i; // the 1st missing element
  }

  // means: there are no missing numbers from 1 to A.length
  // Therefore, the missing number is "A.length+1" (important)
  return length + 1;
}
