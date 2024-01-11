/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and
 you may return the result in any order.

 
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/*
This solution uses a hash map (frequencyMap) to store the count of each element in nums1. 
Then, it iterates through nums2, checks if the element is present in frequencyMap,
and if so, decrements its count and adds it to the result array.
*/
var intersect = function (nums1, nums2) {
  const frequencyMap = new Map();
  const result = [];

  // Count the frequency of each element in nums1
  for (const num of nums1) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Check the frequency and intersect with nums2
  for (const num of nums2) {
    if (frequencyMap.has(num) && frequencyMap.get(num) > 0) {
      result.push(num);
      frequencyMap.set(num, frequencyMap.get(num) - 1);
    }
  }

  return result;
};

// Example usage:
console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]
