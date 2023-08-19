
let obj = {
    myAge: 20,
    myName() {
        console.log(this.myAge);
    },
};

// console.log(`${this.myAge} is global`);
// console.log(obj.myName);

obj.myName();