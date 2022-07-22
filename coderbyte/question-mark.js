/**
 * 
 * Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
 */
function QuestionsMarks(str) {
  // code goes here
  let sum = 0;
  const questionMark = '???';
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '?' || parseInt(char) >= 0) newStr += char;
  }

  if (newStr.indexOf(questionMark) < 0) return false;

  let isToSum = false;
  let count = 0;

  for (let i = 0; i < newStr.length; i++) {
    const char = newStr[i];
    if (char === '?') {
      count++;
      if (count === 3) isToSum = true;
      if (count > 3) {
        count = 0;
        isToSum = false;
      }
    } else {
      if (isToSum) {
        sum += parseInt(char);
        if (sum === 10) {
          return true;
        } else {
          sum = parseInt(char);
          count = 0;
          isToSum = false;
        }
      } else {
        sum = parseInt(char);
        count = 0;
      }
    }
  }
  return false;
}

console.log(QuestionsMarks('acc?7??sss?3rr1??????5'));
