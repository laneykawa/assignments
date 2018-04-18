const axios = require("axios");
const md5 = require("md5");


module.exports = function getSuperheros(query) {
    const { offset } = query;
    const url = "https://gateway.marvel.com:443/v1/public/characters?";
    const ts = new Date().getTime();
    const apikey = "ebd39797b1c088679be1ae7934962df4";
    const pv = process.env.PV;
    const hash = md5(ts + pv + apikey);
    return axios.get(`${url}ts=${ts}&apikey=${apikey}&hash=${hash}&limit=20&offset=${offset || ""}`)
        .then(response => response.data)
        .catch(err => err);
}