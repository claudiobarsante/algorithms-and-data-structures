/*where the size of a word corresponds to how often it appears in the body of text.

To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.

We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier and cleaner when we want to iterate over our data.

Think about capitalized words. For example, look at these sentences:

  "After beating the eggs, Dana read the next step:"
"Add milk and eggs, then add flour and sugar."
What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

Assume the input will only contain words and standard punctuation. */
function worldCloud(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz'";
  let map = {};

  let word = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (alphabet.indexOf(char) >= 0) {
      word += char;
    } else {
      if (word.length > 0) {
        if (word in map) {
          map[word]++;
        } else {
          map[word] = 1;
        }
        word = '';
      }
    }
  }

  if (word.length > 0) {
    if (word in map) {
      map[word]++;
    } else {
      map[word] = 1;
    }
    word = '';
  }

  return JSON.stringify(map);
}

console.log(worldCloud('Mmm...mmm...decisions...decisions'));
