const pokemonImage = document.getElementById('pokemonImage');
const pokemonNumber = document.getElementById('pokemonNumber');
const pokemonName = document.getElementById('pokemonName') 

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIResponse.json();

  return data;
}

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

}

renderPokemon('25')

"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"