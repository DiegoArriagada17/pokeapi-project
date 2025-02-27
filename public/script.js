document.getElementById('searchButton').addEventListener('click', () => {
    const pokemonInput = document.getElementById('pokemonInput').value;
    if (pokemonInput) {
        fetch(`/pokemon/${pokemonInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    displayPokemonInfo(data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al buscar el Pokémon');
            });
    } else {
        alert('Por favor, ingresa un nombre o ID de Pokémon');
    }
});

function displayPokemonInfo(pokemon) {
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = `
        <div class="pokemon-card">
            <h2>${pokemon.nombre.toUpperCase()}</h2>
            <p>ID: ${pokemon.id}</p>
            <p>Altura: ${pokemon.altura / 10} m</p>
            <p>Peso: ${pokemon.peso / 10} kg</p>
            <p>Tipos: ${pokemon.tipos.join(', ')}</p>
            <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
        </div>
    `;
}