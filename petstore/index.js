const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const database = require('./src/database/config');

const app = express();

app.use(express.json());

app.use(routes);

const porta = 3000;

mongoose.connect(database.DB_URL, database.DB_SETTINGS)
    .then(() => console.log('Conectado ao MongoDB.'))
    .catch(erro => console.log(`Erro ao conectar ao MongoDB: ${erro}`));

app.listen(porta, function() {
    console.log(`Petstore rodando na porta ${porta}`);
});