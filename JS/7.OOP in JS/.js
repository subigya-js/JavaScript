let outerFunction = () => {

    let a = 10;

    let innerFunction = () => {
        let b = 10;

        console.log(a);
        console.log(b);
        console.log(a + b);

    }
    innerFunction();
    // return a + b;    We cannot do thiws because we cannot use variable of child function
}

console.log(outerFunction());