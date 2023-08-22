const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = documento.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image');

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data =  await APIResponse.json()
    return data ;
}

const renderPokemon = async () => {
    const data =  await fetchPokemon(pokemon);
    console.log(data);
}

