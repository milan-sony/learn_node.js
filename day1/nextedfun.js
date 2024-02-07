let num = 10;

function first(){
    num = 20;

    function second(){
        num = 30;
    }

    second()
}

first()

console.log(num)