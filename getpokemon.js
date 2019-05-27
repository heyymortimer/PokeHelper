var pokemon = document.getElementById("search");
const url = "https://pokeapi.co/api/v2/pokemon/1"
var pokemonID = document.getElementById("index");
var pokemonName = document.getElementById("name");
var normalImage = document.getElementById("nImage");
var shinyImage = document.getElementById("sImage");
var type1 = document.getElementById("t1");
var type2 = document.getElementById("t2");
var moves = document.getElementById("moves");
var ablt = document.getElementById("ablt");
var bex = document.getElementById("bex");
var bsst = document.getElementById("bsst");

axios.get(url).then(res=> pokemonName.innerHTML = res.data.name);

axios.get(url).then(res=> pokemonID.innerHTML = res.data.id);

axios.get(url).then(res=> normalImage.setAttribute("src", res.data.sprites.front_default));

axios.get(url).then(res=> shinyImage.setAttribute("src", res.data.sprites.front_shiny));
axios.get(url).then(res=> type1.innerHTML = res.data.types[0].type.name);
axios.get(url).then(res=> type2.innerHTML = res.data.types[1].type.name);
axios.get(url).then(res=> ablt.innerHTML = res.data.abilities[0].ability.name);
axios.get(url).then(res=> bex.innerHTML = res.data.base_experience);
axios.get(url).then(res=> bsst.innerHTML = res.data.stats[0].base_stat);
axios.get(url).then(res=> moves.innerHTML = res.data.moves[0].move.name);










