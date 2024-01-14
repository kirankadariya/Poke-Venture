
const main = document.querySelector("main");

const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function getPokemon(){
    const response =await fetch(url)
    const data =await response.json();
    console.log(data)

}

getPokemon()

