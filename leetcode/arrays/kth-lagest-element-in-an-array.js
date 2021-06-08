/*
Success
Details 
Runtime: 212 ms, faster than 9.52% of JavaScript online submissions for Kth Largest Element in an Array.
Memory Usage: 39.7 MB, less than 51.47% of JavaScript online submissions for Kth Largest Element in an Array.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// -- Tip, most of the logic is in the quicksort algorithm. Just take a look at the
// -- quicksort.js file

var findKthLargest = function (nums, k) {
  nums = quickSort(nums, 0, nums.length - 1);
  const position = nums.length - k;

  return nums[position];
};

function swap(nums, left, right) {
  const temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}

function pivotHelper(nums, left = 0, right = nums.length - 1) {
  let pivot = nums[left];
  let swapIdx = left;

  for (let i = left + 1; i <= right; i++) {
    if (pivot > nums[i]) {
      swapIdx++;
      swap(nums, swapIdx, i);
    }
  }
  swap(nums, left, swapIdx);
  return swapIdx;
}

function quickSort(nums, left = 0, right = nums.length - 1) {
  if (left < right) {
    let pivotIdx = pivotHelper(nums, left, right);
    quickSort(nums, pivotIdx + 1, right);
    quickSort(nums, left, pivotIdx - 1);
  }

  return nums;
}

/*
215. Kth Largest Element in an Array
Medium

5864

369

Add to List

Share
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 

Constraints:

1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104
Accepted
*/
