/*You're working on a secret team solving coded transmissions.

Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

For example:

  const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'

JavaScript
When writing your function, assume the message contains only letters and spaces, and all words are separated by one space. */

function reverseHelper(arr, leftIdx, rightIdx) {
  while (leftIdx < rightIdx) {
    const temp = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = temp;
    leftIdx++;
    rightIdx--;
  }

  return arr;
}

function reverseWords(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  // -- first reverse the entire array
  reverseHelper(arr, leftIdx, rightIdx);

  let startIdx = 0;
  // -- reverse only the word that you fins until hit a space or end of array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ' || i === arr.length - 1) {
      leftIdx = startIdx;
      rightIdx = i === arr.length - 1 ? i : i - 1;

      reverseHelper(arr, leftIdx, rightIdx);

      startIdx = i + 1;
    }
  }

  return arr;
}

const arr = [
  'c',
  'a',
  'k',
  'e',
  ' ',
  'p',
  'o',
  'u',
  'n',
  'd',
  ' ',
  's',
  't',
  'e',
  'a',
  'l'
];

console.log(reverseWords(arr));
