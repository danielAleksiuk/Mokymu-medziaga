const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dbUrl = 'mongodb+srv://codingSchoolDaniel:GKLomYzKfAuQ9SUj@coding-school-cluster.ehftrvr.mongodb.net/node-auth';
const authRoutes = require('./routes/authRoutes');
const {requireAuth, checkUser} = require('./middleware/authMiddleware');

mongoose.connect(dbUrl)
    .then(() => {
        app.listen(3000);
        console.log('app launched;database connected');
    })
    .catch(error => console.log(error));


app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get(/(.*)/, checkUser);
app.get('/', requireAuth, (req, res) => res.render('home'));
app.get('/randomListas', requireAuth, (req, res) => res.render('listas'));
app.use(authRoutes);

// app.get('/set-cookies', (req, res) => {
//     res.cookie('newCookie', false);
//     res.cookie('isStudent', true, {maxAge: 1000 * 60 * 60 * 24, secure: true})
//     res.send('cookies yra issaugotos');
// });

// app.get('/red-cookies', (req, res) => {
//     const cookies = req.cookies;

//     res.json(cookies);
// })

