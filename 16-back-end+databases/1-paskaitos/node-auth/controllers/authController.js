const User = require("../models/User");

const handleErrors = (error) => {
    let errors = { email: '', password: ''};

    if (error.code === 11000) {
        errors.email = 'email panaudotas, naudok kita';

        return errors;
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
        res.json(user);
    } catch (e) {
        console.log(e);
        const error = handleErrors(e)
        res.json({error});
    }
    // res.send('new signup');
}

const loginPost = (req, res) => {
    console.log(req.body)
    const { email, psw } = req.body;
    console.log(email, psw)
    res.send('user login');
}

module.exports = {
    signupGet,
    loginGet,
    signupPost,
    loginPost
};