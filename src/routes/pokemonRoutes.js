const express = require("express"); // Para crear el enrutador
const router = express.Router();
const pokemonController = require("../controllers/pokemonController"); // Importa la función getPokemon del controlador

// Define una ruta GET que acepta un parámetro id (nombre o ID del Pokémon) y la asocia con la función getPokemon.
router.get("/:id", pokemonController.getPokemon);

module.exports = router; // Exporta el enrutador para usarlo en server.js
