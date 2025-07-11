const express = require('express');
const PetController = require('./src/controllers/PetController');
const rootRouter = express.Router();

// http://localhost:3000/
rootRouter.get('/', function(req, res) {
    res.json({ msg: "Olá mundo!" });
});

const petRouter = express.Router();

rootRouter.use('/pet', petRouter);

petRouter.post('/', PetController.inserir)
petRouter.get('/', PetController.buscar)

module.exports = rootRouter;