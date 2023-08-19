// substring(); method is all same like slice(); method.
// The only difference is that, it doen't accept -ve value as an Argument.

// Whenever we pass -ve value as an argument, it will start from 0 to start index.
// It means, start index will become 0 and end index will be replace by start index.

// Eg: .substring(7, -2) ==> .substring(0, 7);

// Syntax: <array_name>.substring(start, end);

let items = "Apple, Banana, Kiwi, Mango";

console.log(items.substring(0, 4));
// Output: Appl

console.log(items.substring(9, -4));
// Output: Apple, Ba

// items.substring(9, -4) is equivalent to items.substring(0, 9)
console.log(items.substring(0, 9));
// Output: Apple, Ba