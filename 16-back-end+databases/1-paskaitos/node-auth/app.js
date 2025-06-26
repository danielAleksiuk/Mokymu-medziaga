const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dbUrl = 'mongodb+srv://codingSchoolDaniel:GKLomYzKfAuQ9SUj@coding-school-cluster.ehftrvr.mongodb.net/node-auth';
const authRoutes = require('./routes/authRoutes');

mongoose.connect(dbUrl)
    .then(() => {
        app.listen(3000);
        console.log('app launched;database connected');
    })
    .catch(error => console.log(error));


app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.render('home'));
app.use(authRoutes);
