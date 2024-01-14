
const main = document.querySelector("main");

//const url1 = "https://pokeapi.co/api/v2/pokemon/pikachu";

const url = "https://pokeapi.co/api/v2/pokemon-species";

async function getPokemon(){
    try {const response =await fetch(url)
        if (!response.ok){
            throw new Error (`Http error  Status: ${response.status}`);

        }

        const data =await response.json();
        renderSpecies(data)
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

function renderSpecies(data) {
    const listItems = data.results.map(item => `<li>${item.name}</li>`).join("");
    const html = `
      <h2>Pokemon Species</h2>
      <ul>${listItems}</ul>
    `;
    main.insertAdjacentHTML("beforeend", html);
  }