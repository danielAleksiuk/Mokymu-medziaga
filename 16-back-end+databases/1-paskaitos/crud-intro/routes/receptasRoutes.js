const express = require('express');
const receptasController = require('../controllers/receptasController');
const router = express.Router();

router.get('/receptai/list', receptasController.receptas_list);
router.delete('/receptai/list/:id', receptasController.receptas_delete);
router.post('/receptai/create', receptasController.receptas_create_post);
router.get('/receptai/create', receptasController.receptas_create_get);
module.exports = router;