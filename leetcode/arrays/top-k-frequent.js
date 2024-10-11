/*
Runtime: 116 ms, faster than 16.96% of JavaScript online submissions for Top K Frequent Elements.
Memory Usage: 41.7 MB, less than 70.47% of JavaScript online submissions for Top K Frequent Elements.
*/
var topKFrequent = function (nums, k) {
  let frequency = {};
  let value = 0;
  let sorted = [];
  let mostFrequent = [];

  for (let i = 0; i < nums.length; i++) {
    if (!frequency[nums[i]]) {
      frequency[nums[i]] = 1;
    } else {
      value = frequency[nums[i]];
      frequency[nums[i]] = value + 1;
    }
  }

  for (let key in frequency) {
    sorted.push([key, frequency[key]]);
  }

  sorted.sort((a, b) => b[1] - a[1]);

  for (let j = 0; j < k; j++) {
    mostFrequent.unshift(sorted[j][0]);
  }

  return mostFrequent;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

/*
347. Top K Frequent Elements
Medium

4950

269

Add to List

Share
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
