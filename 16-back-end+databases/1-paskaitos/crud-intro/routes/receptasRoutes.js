const express = require('express');
const receptasController = require('../controllers/receptasController');
const router = express.Router();

router.get('/receptai/list', receptasController.receptas_list);
router.delete('/receptai/list/:id', receptasController.receptas_delete);
router.post('/receptai/create', receptasController.receptas_create_post);
router.get('/receptai/create', receptasController.receptas_create_get);

router.get('/edit/:id', receptas_edit_get );
router.put('/edit/:id', receptas_edit_put)

module.exports = router;