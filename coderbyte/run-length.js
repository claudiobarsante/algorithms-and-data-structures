/**import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function run-length(props) {
   return (
     <View>
     <Text>Have the function RunLength(str) take the str parameter being passed and 
     return a compressed version of the string using the Run-length encoding algorithm.
      This algorithm works by taking the occurrence of each repeating character and 
      outputting that number along with a single character of the repeating sequence. 
      For example: "wwwggopp" would return 3w2g1o2p. 
      The string will not contain any numbers, punctuation, or symbols.</Text>
     </View>);
}

 */

function RunLength(str) {
  // --edge
  if (str.length === 1) return `1${str}`;

  let output = '';

  let previous = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    const char = str[i];

    if (char === previous) {
      count++;
      if (i === str.length - 1) {
        // - last
        output += `${count}${previous}`;
        break;
      }
    }

    if (char !== previous) {
      if (i === str.length - 1) {
        // - last char
        output += `${count}${previous}`;
        output += `${1}${char}`;
        break;
      }
      output += `${count}${previous}`;
      previous = char;
      count = 1;
    }
  }

  return output;
}

// keep this function call here
console.log(RunLength(readline()));
