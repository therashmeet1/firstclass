function closureFunction(){
    let counter = 0;

    let increment = () => {
        counter++;
        console.log(counter);

    }
    return increment;
}
let countMe = closureFunction();

countMe();
countMe();
