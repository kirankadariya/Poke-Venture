
const main = document.querySelector("main");

const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function getPokemon(){
    try {const response =await fetch(url)
        if (!response.ok){
            throw new Error (`Http error  Status: ${response.status}`);

        }

        const data =await response.json();
        renderData(data)
    } catch(err){
        console.log("There is problem with fetch: " +err)
    }

}
getPokemon();

function renderData(data){
    const html = `<h2>${data.name}</h2>
                    <p>${data.id}</p>
                    <p> Abilities: ${data.abilities[0].ability.name}, 
                    ${data.abilities[1].ability.name} </p>`
        main.insertAdjacentHTML("beforeend", html); 
}


