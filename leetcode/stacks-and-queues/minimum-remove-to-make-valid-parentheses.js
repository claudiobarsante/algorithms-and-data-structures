/*
Success
Details 
Runtime: 96 ms, faster than 83.54% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
Memory Usage: 45 MB, less than 86.60% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
time:O(n)
space:O(n)
*/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  // -- it's easy to work with arrays, so you can use split('') to convert to an array
  let original = s.split('');

  let stack = [];

  for (let i = 0; i < original.length; i++) {
    const char = original[i];

    if (char === '(') {
      stack.push(i); // -- if it's a left parentheses, store it's INDEX, NOT THE PARENTHESES !!!
    } else if (char === ')') {
      // -- if the stack is empty you set the right parentheses to '' an empty string
      // -- it's not necessary to remove it right now, beacuse at the end you will use .join('') to convert it
      // -- to a string and the '' empty strings will be desconsidered
      if (stack.length === 0) {
        original[i] = '';
      } else {
        stack.pop(); // -- if the stack it's not empty, just pop() the last element, you don't need to track it anymore
      }
    }
  }

  // -- if the stack it's not empty, just pop() the last element
  // -- and set it's position on the original array to an '' empty string
  // -- so when you convert it to a string it will be descosidered
  // -- REMEMBER TO USE WHILE LOOP, don't use a FOR LOOP, because when you
  // -- pop() the last element, the length of the stack will change and you
  // -- expect to not traverse the entire array
  while (stack.length) {
    const index = stack.pop();
    original[index] = '';
  }

  const result = original.join('');

  return result;
};

console.log(minRemoveToMakeValid('lee(t(c)o)de)'));

/*
1249. Minimum Remove to Make Valid Parentheses
Medium

2214

50

Add to List

Share
Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
Example 4:

Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"
 

Constraints:

1 <= s.length <= 10^5
s[i] is one of  '(' , ')' and lowercase English letters.
*/
