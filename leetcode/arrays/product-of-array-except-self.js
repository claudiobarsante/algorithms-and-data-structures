/**
 * 238. Product of Array Except Self
Medium

9641

631

Add to List

Share
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

Accepted
942,
 * 
 */

//-- Solution time: O(n) space:O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left = [1]; //first element from left always will be 1
  let right = [1]; //first element from right always will be 1

  let output = [];

  //starting product from left, do not reach last element to the right
  let product = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    product = product * nums[i];
    left.push(product);
  }

  //reading from the last element from right, dno not reach the first element to the left
  product = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    product = product * nums[i];
    right.unshift(product);
  }

  //Multiply each result to final output
  /**
   * EX:[1,2,3,4]
   * left = [1,1,2,6]
   * right=[24,12,4,1]
   * output=[(24*1),(1*12),(2*4),(6*1)]
   * final [24,12,8,6]
   */
  for (let i = 0; i < left.length; i++) {
    output.push(left[i] * right[i]);
  }

  return output;
};

// -- Solution time: O(n) space:O(1)
var productExceptSelfOptimized = function (nums) {
  let output = [1];

  //starting product from left
  let product = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    product = product * nums[i];
    output.push(product);
  }

  //update the last position on output
  product = 1;
  const last = output[nums.length - 1]; //6
  let lastIndx = nums.length - 1;
  output[lastIndx] = last * product;
  lastIndx--;

  //from right
  for (let i = nums.length - 1; i >= 0; i--) {
    product = product * nums[i];
    const result = output[lastIndx] * product;
    output[lastIndx] = result;
    lastIndx--;
  }

  return output;
};
