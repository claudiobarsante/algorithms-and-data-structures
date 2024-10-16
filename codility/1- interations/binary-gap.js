/**
 * 1. BinaryGap
Find longest sequence of zeros in binary representation of an integer.
Task Score
100%
Correctness
100%
Performance
Not assessed
Task description
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
 */

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let longest = 0;
  let temp = 0;

  const binary = N.toString(2);

  for (let i = 0; i < binary.length; i++) {
    const num = binary[i];
    if (num === '1') {
      longest = Math.max(longest, temp);
      temp = 0;
    } else {
      temp++;
    }
  }

  return longest;
}

// -- considering that the first elements could be 0
function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2);

  let longest = 0;
  let isCounting = false;
  let current = 0;

  for (let i = 0; i < binary.length; i++) {
    const num = binary[i];

    if (num === '1' && isCounting === false) {
      isCounting = true;
    } else if (num === '1' && isCounting) {
      longest = Math.max(longest, current);
      current = 0;
    } else if (num === '0' && isCounting) {
      current++;
    }
  }

  return longest;
}
