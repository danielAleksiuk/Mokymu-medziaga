import express from 'express';
import Pratimas from '../models/pratimoModelis.js';
import * as controller from '../controllers/controller.js';

const router = express.Router();

// GET visus pratimus
router.get('/', controller.getPratimai);

// GET paimti viena pratima
router.get('/:id', controller.getPratimas);

// POST sukurti pratima
router.post('/', controller.createPratimas);

// PATCH redaguoti viena pratima
router.patch('/:id', controller.updatePratimas);

// delete istrinti viena pratima
router.delete('/:id', controller.deletePratimas);


export default router;