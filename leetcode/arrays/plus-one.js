/**
 *   Plus One

Solution
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Example 3:

Input: digits = [0]
Output: [1]
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
 */

/**
 * ?Explanation
 * You have an array of integers where every element in the array is represents a digit of a number. Say you are given 456, then at index 0 you have 4, at index 1 you have 5 and at index 2 you have 6.

Now, the problem asks you to add 1 to the given number.

Here carry is mathematical carry that is used when you have to add two digits whose sum is greater than 10. By default we have carry as true because you are adding 1 to the number anyway. First you iterate(reverse) through the given digits and look for digits that are equal to 9 (carry being true), then change the current digit to zero and put 1 in the front. If carry is true and and the digit is not 9 then simply add 1 to the digit.

examples :

plusOne([4,9,7])
(3) [4, 9, 8]
here number 497 is given, and you just add 1 to the last digit.

plusOne([1,4,9])
(3) [1, 5, 0]
here we see that the last digit is 9, so first we change it to zero then we add 1 to the second last digit.

plusOne([9,9,9])
(4) [1, 0, 0, 0]
here we see that all the digit are 9, we change all digits to zero and add 1 in the beginning (this is where unshift 1 is used)
 * 
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const lastIdx = digits.length - 1;

  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1]++;
    return digits;
  }

  if (digits.length === 1 && digits[0] === 9) {
    return [1, 0];
  }

  digits[lastIdx] = 0;

  for (let i = lastIdx - 1; i >= 0; i--) {
    const temp = digits[i] + 1;

    if (i === 0 && temp > 9) {
      digits[i] = 0;
      digits.unshift(1);
      return digits;
    } else if (i === 0 && temp <= 9) {
      digits[i] = temp;
      return digits;
    }

    if (temp <= 9) {
      digits[i] = temp;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

/*another solution*/
var plusOne = function (digits) {
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    // Increment the current digit
    digits[i]++;

    // If the digit becomes 10, set it to 0 and carry 1 to the next digit
    if (digits[i] === 10) {
      digits[i] = 0;
    } else {
      // If the digit is less than 10, no need to carry, so we can break the loop
      return digits;
    }
  }

  // If we reach here, it means there is a carry from the leftmost digit
  digits.unshift(1);

  return digits;
};

console.log(plusOne([1, 5, 1, 9]));
