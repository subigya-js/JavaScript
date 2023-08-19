// charCodeAt(); method returns the Unicode (ASCII Value) of the character present at the given index of the String.

// Syntax: <string_name>.charCodeAt(position);

let str = "HELLO WORLD";

console.log(str.charCodeAt(6));
// Output: 87 ==> ASCII value of W

console.log(str.charCodeAt(str.length - 1));
// Output: 68 ==> ASCII Value of D