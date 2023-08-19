// 'for in' Loop:
// --> 'for in' Loop displays the index of Array elements.

console.log("\n");

console.log("\nUsing 'for in' loop");

let data = ["Gaurav Subedi", 19, "Male", "BTech- CSE"];

for (let element in data) {
    console.log(element);
}

console.log("\nUsing 'for of' loop");

//'for of' Loop:
// --> 'for of' Loop displays the elements of Array.

for (let element of data) {
    console.log(element);
}

console.log("\n\n");