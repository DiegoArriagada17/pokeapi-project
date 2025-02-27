const express = require('express');
const pokemonRoutes = require('./routes/pokemonRoutes');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, '../public')));

// Usar las rutas de Pokémon
app.use('/pokemon', pokemonRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});