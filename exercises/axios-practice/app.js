var axios = require ("axios");
axios.get("https://api.vschool.io/laney/todo/").then(function(response){
    var people = response.data
    console.log(response.data);
  }).catch(function(error){
    console.log(error)
  });




//promise.then
//promise based//

// for (var i = 0; i < 10; i++){
//     console.log[i]
// }