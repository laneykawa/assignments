function sum(x, y){  
    if(typeof x !== "number" || typeof y !== "number"){
    throw "Input must be a number";
    //check data types first and throw error
    }
  return x + y;
}


try {
    sum ("1", "2")
} catch (err){
    console.log(err);
}

var user = {username: "sam", password: "123abc"};  
function (username, password){
    if (username !== user.username)
}