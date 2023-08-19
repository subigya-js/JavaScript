// All same like slice(); method.
// Only name difference.

// Suntax: <string_name>.substr(strat, length);
// length is exact relevent to end in slice(); method.


// If we gave any -ve value, then it is totally useless.
// In a sense, it will not give any output.


// But but but....
// If we desire to get elements of a String form it's end, then we can easily use it.

let items = "Apple, Banana, Kiwi";

console.log(items.substr(-4));
// Output: Kiwi
console.log(items.substr(-12));
// Output: Banana, Kiwiw
