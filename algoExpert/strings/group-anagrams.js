/*Write a function that takes in an array of strings and groups anagrams together 
  "words": ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
  output:[["act","tac","cat"],["yo","oy"],["flop","olfp"],["foo"]] - doesn't need to be groupedin this order

*/

function groupAnagrams(words) {
  // Write your code here.
  let anagrams = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // -- first sort wich word
    const sortedWord = word.split('').sort().join('');
    // -- store in a hashtable with sortedWord as key - if already exists, add the original word
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }

  // -- return all the content of the hashtable
  let result = [];
  for (let key in anagrams) {
    result.push(anagrams[key]);
  }
  return result;

  // -- a better optimized solution to return  would be:
  // -- return Object.values(anagrams)
}

console.log(
  groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'])
);
