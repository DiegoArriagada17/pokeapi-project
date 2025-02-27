const axios = require("axios");

const getPokemon = async (req, res) => {
  try {
    const { id } = req.params; // Extrae el parámetro id de la solicitud
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); // Realiza una solicitud GET a la PokeAPI usando axios
    const pokemonData = response.data;

    // Formatear la respuesta
    const pokemonInfo = {
      nombre: pokemonData.name,
      id: pokemonData.id,
      altura: pokemonData.height,
      peso: pokemonData.weight,
      tipos: pokemonData.types.map((type) => type.type.name),
      imagen: pokemonData.sprites.front_default,
    };

    res.json(pokemonInfo); // Devuelve los datos en formato JSON
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el Pokémon" }); // Devolver un mensaje de error si algo falla
  }
};

module.exports = { getPokemon };
