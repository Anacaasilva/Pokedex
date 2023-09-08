const pegarPokemon = (pokemon) => {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(dados => dados.json())
      .then(val => resolve(val))
      .catch(err => reject(err))
  })
}
