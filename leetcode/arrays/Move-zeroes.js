/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /**
   * Using two pointers, where left is the position to swap when the number is different from
   * zero and right the poiner to traverse the array.
   */
  let left = 0;

  // Traverse the array. If element encountered is non-
  // zero, then replace the element at index left
  // with this element
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      nums[left] = nums[right];
      left++;
    }
  }

  console.log('nums', nums);
  // Now all non-zero elements have been shifted to
  // front and the 'left'pointer is set as index of first 0.
  // Make all elements 0 from count to end.
  while (left < nums.length) {
    nums[left] = 0;
    left++;
  }

  return nums;
};

/*Another solution
 *This version of the code ensures that when a non-zero element is encountered,
 *it is swapped with the leftmost zero element
 */
var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      // Swap non-zero elements with the leftmost zero
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }

  return nums;
};
