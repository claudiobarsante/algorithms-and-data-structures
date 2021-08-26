/*
Easy
1. StrSymmetryPoint
Find a symmetry point of a string, if any.
Task Score
100%
Correctness
100%
Performance
100%
Task description
Write a function:

function solution(S);

that, given a string S, returns the index (counting from 0) of a character such that the part of the string to the left of that character is a reversal of the part of the string to its right. The function should return −1 if no such index exists.

Note: reversing an empty string (i.e. a string whose length is zero) gives an empty string.

For example, given a string:

"racecar"

the function should return 3, because the substring to the left of the character "e" at index 3 is "rac", and the one to the right is "car".

Given a string:

"x"

the function should return 0, because both substrings are empty.

Write an efficient algorithm for the following assumptions:

the length of S is within the range [0..2,000,000].
*/

function solution(S) {
  // -- edges
  if (S === '') return -1;
  if (S.length === 1) return 0;
  if (S.length % 2 === 0) return -1;

  let left = 0;
  let right = S.length - 1;

  while (left < right) {
    if (S[left] === S[right]) {
      left++;
      right--;
    } else {
      return -1;
    }
  }

  return left;
}
