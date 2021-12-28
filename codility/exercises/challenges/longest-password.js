/**
 * 1. LongestPassword
Given a string containing words, find the longest word that satisfies specific conditions.
Task Score
100%
Correctness
100%
Performance
Not assessed
Task description
You would like to set a password for a bank account. However, there are three restrictions on the format of the password:

it has to contain only alphanumerical characters (a−z, A−Z, 0−9);
there should be an even number of letters;
there should be an odd number of digits.
You are given a string S consisting of N characters. String S can be divided into words by splitting it at, and removing, the spaces. The goal is to choose the longest word that is a valid password. You can assume that if there are K spaces in string S then there are exactly K + 1 words.

For example, given "test 5 a0A pass007 ?xy1", there are five words and three of them are valid passwords: "5", "a0A" and "pass007". Thus the longest password is "pass007" and its length is 7. Note that neither "test" nor "?xy1" is a valid password, because "?" is not an alphanumerical character and "test" contains an even number of digits (zero).

Write a function:

function solution(S);

that, given a non-empty string S consisting of N characters, returns the length of the longest word from the string that is a valid password. If there is no such word, your function should return −1.

For example, given S = "test 5 a0A pass007 ?xy1", your function should return 7, as explained above.

Assume that:

N is an integer within the range [1..200];
string S consists only of printable ASCII characters and spaces.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
 */
function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const passwords = S.split(' ');

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';

  let seen = {};

  for (let i = 0; i < passwords.length; i++) {
    const password = passwords[i];

    let numbers = 0;
    let letters = 0;
    let isToSave = true;

    for (let j = 0; j < password.length; j++) {
      const char = password[j];

      const isLetter = alphabet.indexOf(char.toLowerCase()) >= 0;
      const isDigit = digits.indexOf(char) >= 0;
      if (isLetter) {
        letters++;
      } else if (isDigit) {
        numbers++;
      } else if (!isLetter && !isDigit) {
        isToSave = false;
        break;
      }
    }
    if (isToSave) {
      seen[i] = { letters, numbers };
    }
  }

  let longest = -1;

  for (let key in seen) {
    const { letters, numbers } = seen[key];
    const isValidLetter = letters % 2 === 0;
    const isValidNumber = numbers % 2 !== 0;
    if (isValidLetter && isValidNumber)
      longest = Math.max(longest, letters + numbers);
  }

  return longest;
}
