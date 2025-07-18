const express = require('express');
const AlarmeController = require('./src/controllers/AlarmeController');
const rootRouter = express.Router();

// http://localhost:3000/
rootRouter.get('/', function(req, res) {
    res.json({ msg: "Olá mundo!" });
});

const alarmeRouter = express.Router();

rootRouter.use('/alarme',alarmeRouter);

alarmeRouter.post('/:id/ativar', AlarmeController.ativar);
alarmeRouter.post('/:id/desativar', AlarmeController.desativar);
alarmeRouter.get('/', AlarmeController.buscar);

module.exports = rootRouter;