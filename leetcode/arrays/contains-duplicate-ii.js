/*219. Contains Duplicate II
Easy

1860

1633

Add to List

Share
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num in seen) {
      const index = seen[num];
      const result = Math.abs(i - index);
      if (result <= k) return true;
    }

    seen[num] = i;
  }

  return false;
};
