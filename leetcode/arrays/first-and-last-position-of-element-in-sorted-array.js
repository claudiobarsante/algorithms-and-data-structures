/*
Success
Details 
Runtime: 76 ms, faster than 83.95% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
Memory Usage: 39.8 MB, less than 37.50% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const binarySearch = (nums, left, right, target) => {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const foundVal = nums[mid];
      if (foundVal === target) {
        return mid;
      } else if (foundVal > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  };

  if (nums.length < 1) return [-1, -1];

  const firstFound = binarySearch(nums, 0, nums.length - 1, target);

  if (firstFound === -1) return [-1, -1];

  let startPos = firstFound;
  let endPos = firstFound;
  let startPosTemp = null;
  let endPosTemp = null;

  while (startPos !== -1) {
    startPosTemp = startPos; //keeps the last valid start position
    startPos = binarySearch(nums, 0, startPos - 1, target); //search from beginning(0) to where the target was first found(firstFound) -1
  }
  startPos = startPosTemp;

  while (endPos !== -1) {
    endPosTemp = endPos; //keeps the last valid end position
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target); //search from where the target was first found + 1 to the end of the array
  }

  endPos = endPosTemp;

  return [startPos, endPos];
};

console.log(searchRange([1, 3, 3, 5, 5, 5, 8, 9], 5));

/*34. Find First and Last Position of Element in Sorted Array
Medium

5657

209

Add to List

Share
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109 */
