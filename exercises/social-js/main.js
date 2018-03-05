var localDjs = [
    {
        firstName: "Travis",
        lastName: "Hayes",
        djName: "Morgan Hayes",
        gender: "male",
        age: 31, 
        genreLikesToDj: "house",
        subGenreLikesToDj: [ "deep-house"],
        equipment: "Pioneer cdjs",
        infoAboutDj: function (){
            console.log("I am a " + this.genreLikesToDj + " DJ");
        },
        favoriteArtists: [
            {
                name: "Aly and Fila",
                genre: "deep-house",
                festivalsDjAt: [
                    {
                        festivalName: "EDC", 
                        location: "Las-Vegas",
                    },
                    {
                        festivalName: "EDC",
                        location: "California",
                    }
                ]
            },
            {
                name: "Tchami",
                genre: "deep-house",
            },
        ],
        residentDjAt: ["texas-club", "Sky"],
        djSoftware: "traktor",  
    },
    {
        firstName: "Angelo",
        lastName: "Dalisy",
        djName: "ADAP",
        gender: "male",
        age: 32, 
        genreLikesToDj: ["house", "edm", "90's Hip-Hop"],
        subGenreLikesToDj: ["electro-house", "future house", "funk house"],
        equipment: "Pioneer sx",
        favoriteArtists: ["Tchami", "Porter Robinson", "Above and Beyond"],
        residentDjAt: ["Huka Bar", "Sky"],
        djSoftware: "serato",
    },
    {
        firstName: "Dan",
        lastName: "Hooten",
        djName: "DJ LVA LVA",
        gender: "male",
        age: 35, 
        genreLikesToDj: "hip-hop",
        subGenreLikesToDj: [ "90's hip-hop", "dirty-south", "west-coast style"],
        equipment: "Pioneer cdjs",
        favoriteArtists: ["Aly and Fila", "Tchami"],
        residentDjAt: ["texas-club", "Sky"],
        djSoftware: "traktor",
    }
];

localDjs[0].infoAboutDj();