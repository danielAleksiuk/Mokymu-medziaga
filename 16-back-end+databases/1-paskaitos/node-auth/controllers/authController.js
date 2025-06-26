const signupGet = (req, res) => {
    res.render('signup');
}

const loginGet = (req, res) => {
    res.render('login');
}

const signupPost = (req, res) => {
    res.send('new signup');
}

const loginPost = (req, res) => {
    res.send('user login');
}

module.exports = {
    signupGet,
    loginGet,
    signupPost,
    loginPost
};