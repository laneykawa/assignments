const parsePokemon = function(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {  
        if (xhr.readyState == 4 && xhr.status == 200) {
            var jsonData = xhr.responseText;
            var data = JSON.parse(jsonData);
            var pokemon = data.objects[0].pokemon
            console.log(pokemon)

            var list = document.getElementById("list")
    
            pokemon.map(function(singlePoke){
                list.innerHTML += `<li> <h1> Name: ${singlePoke.name}</h1> Url: ${singlePoke.resource_uri} </li>`
            })
        }
    };

    xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);  
    xhr.send();
}

parsePokemon();