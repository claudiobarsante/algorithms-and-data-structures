/**
 * 1. TennisTournament
Given the numbers of players and available courts, calculate the maximum number of parallel tennis games.
Task Score
100%
Correctness
100%
Performance
Not assessed
Task description
You are hosting a tennis tournament. P players, who will take part in the first round of this tournament, are already registered and you have reserved C tennis courts for the matches. Exactly two players play in each game and only one game can be played on each court at any given time. You want to host the maximum possible number of games starting at the same time (in order to finish the first round quickly).

How many games can be hosted in parallel simultaneously?

Write a function:

function solution(P, C);

that, given the number of players P and the number of reserved courts C, returns the maximum number of games that can be played in parallel.

Examples:

1. Given P = 5 players and C = 3 available courts, the function should return 2. Two games can be played simultaneously (for instance, the first and second players can play on the first court, and the third and fourth players on the second court, and the third court will be empty because the fifth player does not have a partner to play with).

2. Given P = 10 players and C = 3 courts, the function should return 3. At most three games can be hosted in parallel.

Assume that:

P and C are integers within the range [1..30,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
 */
function solution(P, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (P === 1) return 0;

  let games = Math.floor(P / 2);

  if (games >= C) return C;

  return games;
}
