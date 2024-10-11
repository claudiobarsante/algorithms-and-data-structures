/**
 * 
 * HTML Elements

Have the function HTMLElements(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.

If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. If the string is not formatted properly, then it will only be one element that needs to be changed. For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into a <b>, the string would be properly formatted.*/

function HTMLElements(str) {
  function clean(tag) {
    let output = '';
    for (let i = 0; i < tag.length; i++) {
      const char = tag[i];
      if (char !== '<' && char !== '>') output += char;
    }
    return output;
  }
  let stack = [];
  let isChecking = false;
  let tag = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '<' || isChecking) {
      if (!isChecking) isChecking = true;
      tag += char;
    }
    if (char === '>') {
      isChecking = false;
      tag += char;
      if (tag.includes('/')) {
        const popped = stack.pop();
        const fake = popped[0] + '/' + popped.slice(1);
        if (fake !== tag) return clean(popped);
      } else {
        stack.push(tag);
      }
      tag = '';
    }
  }

  if (stack.length === 0) return 'true';
  // code goes here

  const popped = stack.pop();
  return clean(popped);
}

// keep this function call here
console.log(HTMLElements(readline()));
