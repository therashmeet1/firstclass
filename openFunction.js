

function parent(){
    let message = ' hello from parent'

    function child(){

        console.log(message)
    }
    child()
}
parent()