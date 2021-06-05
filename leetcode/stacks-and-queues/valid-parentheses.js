/*
Success
Details 
Runtime: 76 ms, faster than 86.06% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 38.3 MB, less than 95.76% of JavaScript online submissions for Valid Parentheses.
Next challenges:
*/

/*20. Valid Parentheses
Easy

7668

314

Add to List

Share
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
Accepted
1,452,904
Submissions
3,619,213


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length <= 1) return false;

  let stack = [];
  const closed = ['()', '{}', '[]'];
  const onlyLeftBrackets = ['(', '{', '['];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (onlyLeftBrackets.includes(currentBracket)) {
      stack.push(currentBracket);
    } else {
      const poppedLeftBracket = stack.pop();

      if (!closed.includes(`${poppedLeftBracket}${currentBracket}`))
        return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()[]{}'));
