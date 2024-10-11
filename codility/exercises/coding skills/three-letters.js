/**
 * 1. ThreeLetters
Given two integers A and B, return a string which contains A letters "a" and B letters "b" with no three consecutive letters being the same.
Task Score
100%
Correctness
100%
Performance
Not assessed
Task description
Write a function solution that, given two integers A and B, returns a string containing exactly A letters 'a' and exactly B letters 'b' with no three consecutive letters being the same (in other words, neither "aaa" nor "bbb" may occur in the returned string).

Examples:

1. Given A = 5 and B = 3, your function may return "aabaabab". Note that "abaabbaa" would also be a correct answer. Your function may return any correct answer.

2. Given A = 3 and B = 3, your function should return "ababab", "aababb", "abaabb" or any of several other strings.

3. Given A = 1 and B = 4, your function should return "bbabb", which is the only correct answer in this case.

Assume that:

A and B are integers within the range [0..100];
at least one solution exists for the given A and B.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
 */

/**
 * Tip
 * - If occurrence(a) > occurrence(b) then append “aab”
   - If occurrence(b) > occurrence(a) then append “bba”
   - If occurrence(a) = occurrence(b) then append “ab”
Since we reduce the difference between the occurrences of ‘a’ and ‘b’ by at most 1 in each iteration so “bba” and “aab” are guaranteed not to be followed by “aab” and “bba” respectively.

 */
function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = '';

  while (A > 0 || B > 0) {
    //more 'b', append 'bba'
    if (A < B) {
      if (B-- > 0) result += 'b';
      if (B-- > 0) result += 'b';
      if (A-- > 0) result += 'a';
    } else if (A > B) {
      //more 'a', append 'aab'
      if (A-- > 0) result += 'a';
      if (A-- > 0) result += 'a';
      if (B-- > 0) result += 'b';
    } else {
      //equal number of 'a' and 'b'
      if (A-- > 0) result += 'a';
      if (B-- > 0) result += 'b';
    }
  }

  return result;
}
