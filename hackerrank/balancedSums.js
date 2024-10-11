/**
 * Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

Example


 is between two subarrays that sum to .


The answer is  since left and right sum to .

You will be given arrays of integers and must determine whether there is an element that meets the criterion. If there is, return YES. Otherwise, return NO.

Function Description

Complete the balancedSums function in the editor below.

balancedSums has the following parameter(s):

int arr[n]: an array of integers
Returns

string: either YES or NO
Input Format

The first line contains , the number of test cases.

The next  pairs of lines each represent a test case.
- The first line contains , the number of elements in the array .
- The second line contains  space-separated integers  where .

Constraints





Sample Input

2
3
1 2 3
4
1 2 3 3
Sample Output

NO
YES
Explanation

For the first test case, no such index exists.
For the second test case, , therefore index  satisfies the given conditions.
 */
function balancedSums(arr) {
  // Write your code here
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum -= arr[i];
    if (totalSum === currentSum) return 'YES';

    currentSum += arr[i];
  }

  return 'NO';
}
