/*
15. 3Sum
Solved
Medium
Topics
Companies
Hint
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let up = null;
  let down = null;

  let set = new Set();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    up = i + 1;
    down = nums.length - 1;
    while (up < down) {
      const first = nums[i];
      const second = nums[up];
      const third = nums[down];

      const sum = first + second + third;

      if (sum === 0) {
        const sorted = [first, second, third].sort((a, b) => a - b);
        const identifier = JSON.stringify(sorted);

        if (!set.has(identifier)) {
          result.push(sorted);
          set.add(identifier);
        }

        down--;
        up++;
      }

      if (sum > 0) down--;
      if (sum < 0) up++;
    }
  }

  return result;
};
