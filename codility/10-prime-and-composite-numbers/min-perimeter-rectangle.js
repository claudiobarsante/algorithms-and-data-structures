/*
1. MinPerimeterRectangle
Find the minimal perimeter of any rectangle whose area equals N.
Task Score
100%
Correctness
100%
Performance
100%
Task description
An integer N is given, representing the area of some rectangle.

The area of a rectangle whose sides are of length A and B is A * B, and the perimeter is 2 * (A + B).

The goal is to find the minimal perimeter of any rectangle whose area equals N. The sides of this rectangle should be only integers.

For example, given integer N = 30, rectangles of area 30 are:

(1, 30), with a perimeter of 62,
(2, 15), with a perimeter of 34,
(3, 10), with a perimeter of 26,
(5, 6), with a perimeter of 22.
Write a function:

function solution(N);

that, given an integer N, returns the minimal perimeter of any rectangle whose area is exactly equal to N.

For example, given an integer N = 30, the function should return 22, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..1,000,000,000].

*/

//Dica: seguindo leitura do pdf primes and composites numbers só preciso fazer até a raiz quadrada do N,
//q o menor perimetro vai estar na menor parte;

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let minPerimeter = 2 * (1 + N); // the biggest perimeter

  let i = 2;

  while (i * i <= N) {
    if (N % i === 0) {
      minPerimeter = Math.min(minPerimeter, 2 * (i + N / i));
    }
    i++;
  }
  return minPerimeter;
}
