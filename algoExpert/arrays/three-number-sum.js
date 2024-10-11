/**
 * Three Number Sum Problem Statement
Given an array of integers, find all triplets in the array that sum up to a given target value.

In other words, given an array arr and a target value target, return all triplets a, b, c such that a + b + c = target.

Example:

Input array: [7, 12, 3, 1, 2, -6, 5, -8, 6]
Target sum: 0

Output: [[2, -8, 6], [3, 5, -8], [1, -6, 5]]
 */

function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);

  let up = null;
  let down = null;

  let result = [];

  for (let i = 0; i < array.length; i++) {
    up = i + 1;
    down = array.length - 1;
    while (up < down) {
      const sum = array[i] + array[up] + array[down];
      if (sum === targetSum) {
        result.push([array[i], array[up], array[down]]);
        down--;
        up++;
      } else if (sum > targetSum) {
        down--;
      } else if (sum < targetSum) {
        up++;
      }
    }
  }

  return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
