/*
Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well. In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.

Example

Sorted, . Several pairs have the minimum difference of : . Return the array .

Note
As shown in the example, pairs may overlap.

Given a list of unsorted integers, , find the pair of elements that have the smallest absolute difference between them. If there are multiple pairs, find them all.

Function Description

Complete the closestNumbers function in the editor below.

closestNumbers has the following parameter(s):

int arr[n]: an array of integers
Returns
- int[]: an array of integers as described

Input Format

The first line contains a single integer , the length of .
The second line contains  space-separated integers, .

test cases : 
[-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854]
result:[-20 30] (30) - (-20) = 50, which is the smallest difference.

[-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470 ]
result:-520 -470 -20 30 (-470) - (-520) = 30 - (-20) = 50, which is the smallest difference.

[5 4 3 2]
result:2 3 3 4 4 5 Here, the minimum difference is 1. Valid pairs are (2, 3), (3, 4), and (4, 5).
*/

function closestNumbers(arr) {
  // Write your code here
  let smallestDifference = Infinity;
  let result = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i] - arr[i + 1]);
    smallestDifference = Math.min(smallestDifference, diff);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i] - arr[i + 1]);
    if (diff === smallestDifference) result.push(arr[i], arr[i + 1]);
  }
  return result;
}

console.log(closestNumbers([5, 4, 3, 2]));
