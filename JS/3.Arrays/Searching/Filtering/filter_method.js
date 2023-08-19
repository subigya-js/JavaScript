// It is all almost same like find(); method, the only difference is,
// find(); method used to return only one value which is satisfied by the given condition,
// that value also used to be picked like "First come first service" 😂

// But but but.....
// filter(); method is baap of find(); method becuase it returns entire array containing
// all the values which is satisfied by given condition.

// Yo pani tuccha "First come first service" basic mai garxa tara bsdk le sabai value return gardinxa.

// Difference yeti nai ho aru kai xaina.

// Eg:

const price = [1200, 300, 400, 500, 600, 1000, 10];

const Filter = price.filter(element => element < 400);

console.log(`\n${Filter}\n`);

// Output: 300, 10

// Yesle ascending/descending order ma return ta gardaina tara condition support garne sabai value
// return gardinxa in the form of array.