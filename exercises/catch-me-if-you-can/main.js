// try {
//     function sum( x, y){
//         return x + y
//         } 
//     console.log(sum(2, r))
//     }catch (err){
//         console.log("Error");
//     };

function sum(x, y){  
    if(typeof x !== "number" || typeof y !== "number"){
     throw "Input must be a number.";
    //check data types first and throw error
    }
  return x + y;
}

try {
    sum ("1", "2")
} catch (err){
    console.log(err);
}

// var user = {username: "sam", password: "123abc"};  
// function (username, password){
//     if (username !== user.username)
// }


var user = {username: "sam", password: "123abc"};  
function login(username, password){  
    if (username !== username){
        throw "Username or PW incorrect"
    } else if (password !== password){
        throw ("Username or PW incorrect")
    } else {
        console.log("Login Successful")
    }
};

try {
    login ("sam","123abc")
} catch (err){
    console.log(err);
};