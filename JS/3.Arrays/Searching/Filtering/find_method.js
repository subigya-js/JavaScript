
// Syntax: <array_name>.find((element, index, array) => condition);
//                          We use call back function here.

// Eg: yehi tala deko xa ta bsdk.

// Yesma k hunxa vanye, tyo arrow function ma return garna parne condition lai array ko first element 
// dekhi traverse gardai janxa. Tyo condition jaha pugda milxa telai lai return garxa ra traversal stop hunxa.

// If not found, returns 'undefined'



const price = [1200, 300, 400, 401, 500, 600, 1000, 10];

const found = price.find((gaurav) => gaurav < 400);
const foound = price.find((element) => element > 400);

console.log(`\nLess than 400 is: \n${found}\n`);       // Output: 300
console.log(`Greater than 400 is: \n${foound}\n`);    // Output: 1200

// console.log(price.find(value => value < 300));    // Output: 10