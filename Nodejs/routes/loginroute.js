import express from 'express';
import { Loginuser,registerUser } from '../Controller/logincontroller.js';
import verifyToken from '../Controller/Middleware/authMiddleware.js';

const router = express.Router();


router.post('/register', registerUser);


router.post('/login', Loginuser);


router.get('/cart', verifyToken, (req, res) => {
    res.status(200).json({ message: "Access to cart granted", user: req.user });
});

export default router;