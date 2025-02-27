const axios = require('axios');

const getPokemon = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el nombre o ID del Pokémon desde la URL
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = response.data;

        // Formatear la respuesta
        const pokemonInfo = {
            nombre: pokemonData.name,
            id: pokemonData.id,
            altura: pokemonData.height,
            peso: pokemonData.weight,
            tipos: pokemonData.types.map(type => type.type.name),
            imagen: pokemonData.sprites.front_default,
        };

        res.json(pokemonInfo);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el Pokémon' });
    }
};

module.exports = { getPokemon };