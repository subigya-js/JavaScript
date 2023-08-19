// Display the unicode of the last element of the string.
// We will be using charCodeAt(); method.

let str = "HELLO WORLD";

console.log(`The last character of the string: "${str}" is: "${str.charAt(str.length - 1)}" and it's Unicode value is: "${str.charCodeAt(str.length - 1)}"`);