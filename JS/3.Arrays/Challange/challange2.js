// 1. Find the sqrt. of each elements:
// arr = [25,36,45,64,81];
console.log("\nQ1");

let arr1 = [25, 36, 45, 64, 81];

for (element of arr1) {
    // let square = Math.sqrt(element);
    console.log(Math.sqrt(element));
}

console.log("\nQ2");
// 2. Multiply each elements by 2 and return only those elements which are greater than 10.
// arr = [2,3,4,6,8];

let arr2 = [2, 3, 4, 6, 8];

for (element of arr2) {

    // let mul = element1 * 2;

    if (element * 2 > 10) {
        console.log(element);
    }
}