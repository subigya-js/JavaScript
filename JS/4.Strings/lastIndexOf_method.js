// lastIndexOf(); method returns the index of last occurance (index/posn.) of search value.
// If the valye isn't found, it will return -1.

// Syntax: <string_name>.lastIndexOf("string_to_be_serached", starting_index);

// It starts searching the element from last index to 0th index of the String, whereas indexOf(); method used
// to search from 0th index (first) to last index of the String.


let data = "I am the Subigya Subedi";

console.log(data.lastIndexOf("the"));
// Output: 5

console.log(data.lastIndexOf("Subedi", 4));
// Output: -1

// Hami le yeha k garyem vani, 4 lai last index banayem ani lastIndexOf(); method le 4 dekhi 0 samma "Subedi" lai
// search gardai janxa. 4 dekhi 0 ko bich ma "Subedi" vetdaina ani -1 return garxa. If veteko theyo vanye "S" 
// ko index return gardintheyo (Yo tala jastai).

console.log(data.lastIndexOf("the", 8));
// Output: 5

console.log(data.lastIndexOf("Subigya", 7));
// Output: -1