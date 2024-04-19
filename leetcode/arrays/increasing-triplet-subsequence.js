/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

*/

// * Explanation'
/*
Example Walkthrough
Let's illustrate the solution approach using a small example where our input nums array is [1, 2, 3, 4, 5].

We initialize mi and mid to infinity. Current state: mi = inf, mid = inf.
We iterate over the array:
We compare the first element, 1, with mid. Since 1 < inf, we cannot form a triplet yet, but 1 becomes our new mi. Updated state: mi = 1, mid = inf.
We move to the next element, 2. Now, 2 is greater than mi but still less than mid. So, 2 becomes our new mid. Updated state: mi = 1, mid = 2.
Next element is 3. It is greater than both mi and mid. We now have a valid triplet: 1 < 2 < 3. Hence, according to our solution approach, we return True. There is no need to check the remaining elements (4 and 5) because we have successfully found an increasing triplet.
In this example, the approach quickly identifies the increasing sequence with the satisfaction of the conditions outlined in the problem description. The algorithm efficiently updates mi and mid and only stops when it confirms the existence of the increasing triplet.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // -- edges
  if (nums.length < 3) return false;

  // Initialize the smallest and middle values in the triplet
  let smallest = nums[0];
  let middle = Infinity;

  // Iterate through the array to find the increasing triplet
  for (let number of nums) {
    if (number <= smallest) {
      // Current number becomes the new smallest if it's smaller or equal to the current smallest
      smallest = number;
    } else if (number <= middle) {
      // Current number is greater than smallest but smaller or equal to middle,
      // so it becomes the new middle
      middle = number;
    } else {
      // If we found a number greater than both smallest and middle, we found an increasing triplet
      return true;
    }
  }

  // If no increasing triplet is found, return false
  return false;
};
