/**
 * Single Number


Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const first = nums[i];
    const second = nums[i + 1];

    if (first === second) {
      count++;
    } else if (first !== second && count > 0 && i + 1 < nums.length - 1) {
      count = 0;
    } else if (first !== second && count > 0 && i + 1 === nums.length - 1) {
      return second;
    } else if (first !== second && count === 0) {
      return first;
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
