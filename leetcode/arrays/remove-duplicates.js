/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

0 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order. */

/**TIP:
 * Approach 1: Two Pointers
Algorithm

Since the array is already sorted, we can keep two pointers ii and jj, where ii is the 
slow-runner while jj is the fast-runner. As long as nums[i] = nums[j]nums[i]=nums[j],
 we increment jj to skip the duplicate.

When we encounter nums[j] !== [i], the duplicate run has ended so we must copy its value
 to nums[i + 1]nums[i+1]. i is then incremented and we repeat the same process again
  until jj reaches the end of array.
 */
/**

//? -- better version
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // *0 is the initially position with an unique number, so the first position to swap will be 1 */
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++; // increment for the next position to swap
    }
  }
  return index; // as index starts with 1, index will be the number of unique numbers
};
/*Another solution
var removeDuplicates = function(nums) {
    let unique = 1; // at least it will have one unique number
    
    let left = 0;
    let right = left +1;
    
    while(left < right && right <=nums.length-1){
       
        if(nums[left] === nums[right]){
            right++;
        }else{                  
            [nums[left+1]] = [nums[right]];            
            unique++; //-- if find a differente number, sum to unique
            left++;
            right++;
        }
        
    }
    
    return unique;
    
 
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))








*/
