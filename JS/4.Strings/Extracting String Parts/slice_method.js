var items = "Apple, Banana, Kiwi, Mango";

console.log(items.slice(0, 4));
// Output: Appl

// Since (0, 4) is given so it will go from 0 to 3rd index.

console.log(items.slice(0));
// Output: Apple, Banana, Kiwi, Mango

// Since it is mandatory to give start index and end index is optional,
// if we are passing single argument, then it will go from given index to the last index.

console.log(items.slice(7, -2));
// Output: Banana, Kiwi, Man

// Whenever we encounter any negative value, then always remember that we should go till last index.
// But here, it will go from 7 to (last - 2). It will neglect last two elements.