const express = require("express");
const pokemonRoutes = require("./routes/pokemonRoutes"); // Importa las rutas definidas en pokemonRoutes con la ruta base /pokemon
const path = require("path");

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "../public")));

// Asocia las rutas definidas en pokemonRoutes con la ruta base /pokemon
app.use("/pokemon", pokemonRoutes);

// Inicia el servidor en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
