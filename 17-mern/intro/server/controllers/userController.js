import User from '../models/userModelis.js';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

export const loginUser = async (req, res) => {
    const {email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.json({email, token});
    } catch (error) {
        res.json({error: error.message})
    }
}

export const logoutUser = async (req, res) => {
    res.json({msg: 'logout user'});
}

export const signupUser = async(req, res) => {
    const { email , password } = req.body;

    try {
        const user = await User.signup(email, password);
        const token = createToken(user._id)
        res.json({ email, token });
    } catch (error) {
        res.json({ error: error.message });
    }
    res.json({msg: 'signup user'});
}

