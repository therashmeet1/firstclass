function parent(){
    let message = 'helo from parent'

    function child(){
        console.log(message)
    }
return child;
}
var childFunction = parent()

childFunction()