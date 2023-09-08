const pokemonImage = document.getElementById('pokemonImage');
const pokemonNumber = document.getElementById('pokemonNumber');
const pokemonName = document.getElementById('pokemonName');

const form = document.querySelector('.form');
const input = document.querySelector('.inputSearch');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = `Loading ...`;
  pokemonNumber.innerHTML = '';

  pegarPokemon(pokemon)
    .then((data) => {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    
        input.value = '';
        searchPokemon = data.id;
    })
    .catch(() => {
      pokemonName.innerHTML = `Not found :c`
      pokemonNumber.innerHTML = '';
      pokemonImage.style.display = 'none';
  
      input.value = '';
    })
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  renderPokemon(input.value.toLowerCase()); //fazer com que todas as letras fiquem minusculas
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
})

renderPokemon(searchPokemon);
