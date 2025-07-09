import User from '../models/userModelis.js';

export const loginUser = async (req, res) => {
    res.json({msg: 'login user'});
}

export const logoutUser = async (req, res) => {
    res.json({msg: 'logout user'});
}

export const signupUser = async(req, res) => {
    const { email , password } = req.body;

    try {
        const user = await User.signup(email, password);
        res.json({user});
    } catch (error) {
        res.json({ error: error.message });
    }
    res.json({msg: 'signup user'});
}