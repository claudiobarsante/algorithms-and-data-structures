/**Reverse word in string  can not use split,reverse*/
function reverseWordsInString(string) {
  // Write your code here.
  console.log('string', string);
  let map = {};

  let temp = '';

  let position = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char !== ' ') {
      temp += char;
    } else {
      if (temp.length > 0) {
        map[position] = temp;
        temp = '';
        position++;
      }
      map[position] = ' ';
      position++;
    }
  }

  if (temp.length > 0) map[position] = temp;

  let result = '';

  for (let j = position; j >= 0; j--) {
    const key = j.toString();

    if (key in map) {
      result += map[key];
    }
  }
  return result;
}

console.log(reverseWordsInString('Reverse These Words'));

// -- expected Words These Reverse
