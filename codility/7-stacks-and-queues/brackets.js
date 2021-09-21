/**
 * Brackets
Determine whether a given string of parentheses (multiple types) is properly nested.
Task Score
100%
Correctness
100%
Performance
100%
Task description
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
 */
function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (S.length === 0) return 1;
  const left = '{[(';
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (left.indexOf(char) >= 0) {
      stack.push(char);
    } else {
      if (stack.length === 0) return 0;
      const last = stack.pop();
      const pair = `${last}${char}`;
      if (pair !== '{}' && pair !== '[]' && pair !== '()') return 0;
    }
  }

  if (stack.length === 0) return 1;

  return 0;
}
