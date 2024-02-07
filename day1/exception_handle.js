try{
    if(a===0)
    throw "User not found"
}catch(err){
    console.log(err)
}finally{
    console.log("Someting")
}

/* 

The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.

*/