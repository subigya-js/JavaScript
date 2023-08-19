// We use new Date() constructor to generate Date and Time.

let myDate = new Date();

console.log("\nGMT Standard Time: ");
console.log(myDate);
console.log("\n");
// Output: 2022-08-01T11:28:45.820Z
// It is giving me GMT Standard Time. 
// Now, to get my Local Standard Time, we use .toLocalString(); method.

let myLocalTime = myDate.toLocaleString();

console.log("Local Standard Time: ");
console.log(myLocalTime);
// Output: 8/1/2022, 5:00:30 PM
console.log("\n");

console.log("Using .toString(); method: ");
console.log(myDate.toString());
console.log("\n");
