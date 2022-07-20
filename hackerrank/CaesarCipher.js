/**
 * Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
Example


The alphabet is rotated by , matching the mapping above. The encrypted string is .

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description

Complete the caesarCipher function in the editor below.

caesarCipher has the following parameter(s):

string s: cleartext
int k: the alphabet rotation factor
Returns

string: the encrypted string
Input Format

The first line contains the integer, , the length of the unencrypted string.
The second line contains the unencrypted string, .
The third line contains , the number of letters to rotate the alphabet by.

Constraints



 is a valid ASCII string without any spaces.

Sample Input

11
middle-Outz
2
Sample Output

okffng-Qwvb
Explanation

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
d -> f
d -> f
l -> n
e -> g
-    -
O -> Q
u -> w
t -> v
z -> b
Language
JavaScript (Node.js)




 */
function caesarCipher(s, k) {
  // Write your code here
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const TOTAL_ALPHABET_LETTERS = 26;

  //*use remainder operator(mod) to guarantee that the new the alphabet rotation factor will not exceeded
  //*the number o alphabet letters

  const newRotationFactor = k % TOTAL_ALPHABET_LETTERS;
  let output = '';
  let isUpperCase = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === char.toUpperCase()) isUpperCase = true;
    if (char === char.toLowerCase()) isUpperCase = false;

    let currentIndex = 0;

    if (isUpperCase) {
      currentIndex = alphabet.indexOf(char.toLowerCase());
    } else {
      currentIndex = alphabet.indexOf(char);
    }
    //*use remainder operator(mod) to guarantee that the newIndex is between 0:a -> 25:z
    if (currentIndex >= 0) {
      const newIndex = currentIndex + newRotationFactor;
      output += isUpperCase
        ? alphabet[newIndex % TOTAL_ALPHABET_LETTERS].toLocaleUpperCase()
        : alphabet[newIndex % TOTAL_ALPHABET_LETTERS];
    } else {
      output += char;
    }
  }
  return output;
}
console.log(caesarCipher('middle-Outz', 2));
