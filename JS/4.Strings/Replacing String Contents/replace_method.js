// replace(); method replaces the specified value with another value in a String.

// Syntax: <string_name>.replace(search_for, replace_with);

// Key points:
// 1. The replace(); method doesn't change the string. It returns a new String.
// 2. By default, the replace(); method replaces only the first match.


let myData = "I am gaurav Subedi, gaurav";

let rep = myData.replace("gaurav", "Gaurav");
console.log(rep);
// Output: I am Gaurav Subedi, gaurav