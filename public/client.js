//get gen 7 pics
var pokePhoto = "https://pokeapi.co/api/v2/pokemon/?offset=720&limit=20";

const library = document.getElementById("library");

console.log(library);

const fetchPokemon = async () => {
  //gets api
  const url = `https://pokeapi.co/api/v2/pokemon?limit=81`;
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = data.results.map((result, index) => ({
    ...result,
    id: index + 722,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
      722}.png`
  }));
  
  displayPokemon(pokemon);
};
const displayPokemon = pokemon => {
  const pokemonHTMLString = pokemon
    .map(
      pokeman => `

  <li class="card" onclick="selectPokemon(${pokeman.id})">
    <img class="card-image" src="${pokeman.image}"/>
    <h2 class="card-title"> Pokemon number ${pokeman.id}</h2>
  </li>`
    )
    .join("");
  library.innerHTML = pokemonHTMLString;
};

const selectPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeman = await res.json();
  displayPopup(pokeman);
};

const displayPopup = pokeman => {
  var num = pokeman.weight * 0.1;
  var x = num.toFixed(1);
  const type = pokeman.types.map(type => type.type.name).join(", ");
  const image = pokeman.sprites["front_default"];
  const htmlString = `
   <div class="popup">
        <div class="card">
        <img class="card-image" src="${image}"/>
        <h2 class="card-title"></h2>
        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
        <p id="info"><small>Height: </small>${(pokeman.height * 10)} cm| <small>Weigth: </small>${x} kg | <small>Type: </small>${type}<br>   
<button id="close" onclick="closePopup()">Close</button>
  </div>
   </div>`;
  library.innerHTML = htmlString + library.innerHTML;
  console.log(htmlString);
};

const closePopup = () => {
  const popup = document.querySelector(".popup");
  popup.parentElement.removeChild(popup);
};

fetchPokemon();
