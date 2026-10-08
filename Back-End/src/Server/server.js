const express = require('express');
const cors = require('cors');
require('dotenv').config();

import router from '../Routes/usuarioRoutes.js';

const receitasRoutes = require('./routes/receitas');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/usuarios', router);
app.use('/receitas', receitasRoutes);
app.use('/favoritos', favoritosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});