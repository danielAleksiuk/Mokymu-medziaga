import express from 'express';
import { loginUser, signupUser, logoutUser} from '../controllers/userController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/signup', signupUser);

export default router;
