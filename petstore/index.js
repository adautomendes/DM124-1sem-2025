const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

const porta = 3000;

app.listen(porta, function() {
    console.log(`Petstore rodando na porta ${porta}`);
});