const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
];

console.log("\nThe given array is:");
arr.map(element => console.log(element));

console.log("\nThe flatted array of above array is:");

const flatArr = arr.reduce((accum, element) => accum.concat(element));
console.log(flatArr);

console.log("\n");