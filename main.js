const pokemonName = 'pikachu'; // Change this to the Pokémon you want to fetch

// Function to fetch Pokémon data from the API
async function fetchPokemonData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

// Function to display Pokémon data
function displayPokemonData(pokemon) {
    console.log('Name:', pokemon.name);
    console.log('ID:', pokemon.id);
    console.log('Abilities:', pokemon.abilities.map(ability => ability.ability.name).join(', '));
    console.log('Types:', pokemon.types.map(type => type.type.name).join(', '));
    console.log('Sprites:', pokemon.sprites.front_default);
}

// Fetch and display Pokémon data
fetchPokemonData(pokemonName)
    .then(pokemon => displayPokemonData(pokemon))
    .catch(error => console.error('Error:', error));
