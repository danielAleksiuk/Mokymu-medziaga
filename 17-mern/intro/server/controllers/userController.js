import User from '../models/userModelis.js';

export const loginUser = async (req, res) => {
    res.json({msg: 'login user'});
}

export const logoutUser = async (req, res) => {
    res.json({msg: 'logout user'});
}

export const signupUser = async(req, res) => {
    res.json({msg: 'signup user'});
}