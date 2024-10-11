/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
*/

function solution(n) {
  const string = n.toString();
  if (string.length % 2 !== 0) return false;

  let firstHalf = 0;
  let secondHalf = 0;

  const half = Math.floor((string.length - 1) / 2);
  for (let i = 0; i < string.length; i++) {
    if (i <= half) {
      firstHalf += Number(string[i]);
    } else {
      secondHalf += Number(string[i]);
    }
  }
  return firstHalf === secondHalf;
}
