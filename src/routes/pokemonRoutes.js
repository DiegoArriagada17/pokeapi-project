const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Ruta para obtener información de un Pokémon por nombre o ID
router.get('/:id', pokemonController.getPokemon);

module.exports = router;