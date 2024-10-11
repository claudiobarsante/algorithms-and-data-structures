/**
 * 
 * 189. Rotate Array
Medium

4988

959

Add to List

Share
Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * https://betterprogramming.pub/3-ways-to-rotate-an-array-2a45b39f7bec
 * Approach #3: Reversing the Sections
In this third approach, we’re going to be reversing parts of the nums. The first time, we reverse the entire array. The second time, we reverse the first k elements of the array. The third time, we reverse the final elements of the array, from k to the end.
The idea behind this approach is best be seen with an example. We start with the array [1, 2, 3, 4, 5], and we want to rotate it two steps. We start by rotating the entire array.

[1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1]
Now, we’ll want to rotate the first k elements. Since k is 2, we’ll rotate the elements at 0 and 1.

[5, 4, 3, 2, 1] -> [4, 5, 3, 2, 1]
Finally, we’ll rotate the last elements, from index k to the end. This gives us the final array that we want.

[4, 5, 3, 2, 1] -> [4, 5, 1, 2, 3]
Coding the third approach
To code this solution, we’ll write a function called reverse within the rotate function, and we’ll call it three times. To start, however, we’ll do the same modification to k that we did in the previous two approaches.

Then, we’ll call the function reverse (which we’ll write in a minute), and we’ll call it three times. reverse() will take in the array, the index to start reversing, and the index to end reversing. So, the first call to reverse() will pass in nums, 0 (as the start index), and nums.length — 1 (as the end index). The second call to reverse() will pass in nums, 0 (as the start index), and k — 1 (as the end index). The third call to reverse() will pass in nums, k (as the start index), and nums.length — 1 (as the end index).

Now, we can write the function reverse, whose parameters will be nums, start, and end. In this function, we switch the values at the start and end index, and move start and end toward the center. We keep doing this as long as start is less than end.
So, we write a while loop, that will keep going as long as start is less than end. Inside the loop, we keep a temporary variable that stores the value of the nums array at the start index. Then, we set the value at the start index equal to the value at the end index and the value at the end index equal to the temporary variable. We move start toward the middle by incrementing it and we move the end toward the middle by decrementing it. Finally, when the while loop has executed, well return nums to the rotate function.} nums 
 * 
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1); // -- rotating the entire array
  reverse(nums, 0, k - 1); // -- rotate first section from beginning to k-1 (index of the last element)
  reverse(nums, k, nums.length - 1); // -- rotate last section from k to nums.length-1

  function reverse(nums, start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      start++;
      end--;
    }

    return nums;
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5], 2));
