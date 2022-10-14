const input = document.querySelector('.poke-search');
const search = document.getElementById('search');


const capitalize = (str) => {
    const cap = str.charAt(0).toUpperCase() + str.slice(1);
    return cap;
}

const pokemonSearch = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const pokeName = input.value;
    const response = await fetch(`${url}${pokeName}`);
    if (response.status == 404){
        document.querySelector('.error').style.display = 'block';
        return
    }
    else {
        document.querySelector('.error').style.display = 'none';
    }



    const pokemon = await response.json();


    const pokeImg = document.querySelector('.poke-img');
    pokeImg.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
    const name = document.getElementById('name');
    name.innerHTML = `<strong>Name</strong>: ${capitalize(pokemon.species.name)}`;

    const type = document.getElementById('type');
    type.innerHTML = `<strong>Type</strong>: ${capitalize(pokemon.types[0].type.name)}`;

    const weight = document.getElementById('weight');
    weight.innerHTML = `<strong>Weight</strong>: ${pokemon.weight}`;

    const height = document.getElementById('height');
    height.innerHTML = `<strong>Height</strong>: ${pokemon.height}`;

    const moveList = document.getElementById('move-list');
    moveList.innerHTML = `<li>${capitalize(pokemon.moves[0].move.name)}</li>
                          <li>${capitalize(pokemon.moves[1].move.name)}</li>
                          <li>${capitalize(pokemon.moves[2].move.name)}</li>
                          <li>${capitalize(pokemon.moves[3].move.name)}</li>`

}

search.addEventListener('click', () => {
    pokemonSearch();
    document.querySelector('.poke-search').value = '';
});