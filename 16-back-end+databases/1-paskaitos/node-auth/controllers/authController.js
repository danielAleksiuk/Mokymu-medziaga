const User = require("../models/User");
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, 'slaptas dalykas', {
        expiresIn: maxAge
    })
};

const handleErrors = (error) => {
    let errors = { email: '', password: ''};

    if (error.code === 11000) {
        errors.email = 'email panaudotas, naudok kita';

        return errors;
    }

    if (error.message === 'incorrect email') {
        errors.email = 'toks mailas nera registruotas';
    }

    if (error.message === 'incorrect password') {
        errors.password = 'slaptazodis neteisingas';
    }

    if (error.message.includes('user validation failed')) {
        Object.values(error.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const signupGet = (req, res) => {
    res.render('signup');
}

const loginGet = (req, res) => {
    res.render('login');
}

const signupPost = async (req, res) => {
    const { email, psw } = req.body;

    try {
        const user = await User.create({
            email: email,
            password: psw
        });
        
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.json({user:user._id});
    } catch (e) {
        const error = handleErrors(e)
        res.json({error});
    }
    // res.send('new signup');
}
// useris123
const loginPost = async (req, res) => {
    const { email, psw } = req.body;
    
    try {
        const user = await User.login(email, psw);

        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.json({user:user._id});
    } catch (e) {
        console.log(e)
        const error = handleErrors(e)
        console.log(error);
        res.json({error});
    }
}

module.exports = {
    signupGet,
    loginGet,
    signupPost,
    loginPost
};