/*
16. 3Sum Closest
Solved
Medium
Topics
Companies
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

Constraints:

3 <= nums.length <= 500
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let set = new Set();
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const total = first + nums[left] + nums[right];
      set.add(total);
      if (total < target) left++;
      else right--;
    }
  }

  let min = Infinity;
  let output = null;

  set.forEach(val => {
    const diff = Math.abs(target - val);
    if (diff < min) {
      min = diff;
      output = val;
    }
  });

  return output;
};
