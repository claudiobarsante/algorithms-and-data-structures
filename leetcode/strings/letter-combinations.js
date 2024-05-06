/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const numbers = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  // --edges
  if (digits === '') return [];
  if (digits.length === 1) return numbers[Number(digits)];

  const length = digits.length;
  const output = [];

  const backtracking = (idx, combination) => {
    if (idx === length) {
      output.push(combination);
      return;
    } else {
      const letters = numbers[digits[idx]];
      for (let i = 0; i < letters.length; i++) {
        backtracking(idx + 1, combination + letters[i]);
      }
    }
  };
  backtracking(0, '');

  return output;
};

console.log(letterCombinations('23'));
/*
-- 0 
-- 1 a
-- 2 ad
-- 2 ae
-- 2 af
-- 1 b
-- 2 bd
-- 2 be
-- 2 bf
-- 1 c
-- 2 cd
-- 2 ce
-- 2 cf

Approach
This is based on Python solution. Other might be differnt a bit.

Initialize an empty list res to store the generated combinations.

Check if the digits string is empty. If it is, return an empty list since there are no digits to process.

Create a dictionary digit_to_letters that maps each digit from '2' to '9' to the corresponding letters on a phone keypad.

Define a recursive function backtrack(idx, comb) that takes two parameters:

idx: The current index of the digit being processed in the digits string.
comb: The current combination being formed by appending letters.
Inside the backtrack function:

Check if idx is equal to the length of the digits string. If it is, it means a valid combination has been formed, so append the current comb to the res list.
If not, iterate through each letter corresponding to the digit at digits[idx] using the digit_to_letters dictionary.
For each letter, recursively call backtrack with idx + 1 to process the next digit and comb + letter to add the current letter to the combination.
Initialize the res list.

Start the initial call to backtrack with idx set to 0 and an empty string as comb. This will start the process of generating combinations.

After the recursive calls have been made, return the res list containing all the generated combinations.

The algorithm works by iteratively exploring all possible combinations of letters that can be formed from the given input digits. It uses a recursive approach to generate combinations, building them one letter at a time. The base case for the recursion is when all digits have been processed, at which point a combination is complete and added to the res list. The backtracking nature of the algorithm ensures that all possible combinations are explored.

Complexity
Time complexity: O(3^n) or O(4^n)
n is length of input string. Each digit has 3 or 4 letters. For example, if you get "23"(n) as input string, we will create 9 combinations which is O(3^2) = 9

Space complexity: O(n)
n is length of input string. This is for recursive call stack.

/**
 **/
