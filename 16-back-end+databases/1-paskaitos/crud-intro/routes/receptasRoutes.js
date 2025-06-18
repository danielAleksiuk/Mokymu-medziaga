const express = require('express');
const receptasController = require('../controllers/receptasController');
const router = express.Router();

router.get('/receptai/list', receptasController.receptas_list);


module.exports = router;