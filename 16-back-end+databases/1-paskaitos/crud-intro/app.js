const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const dbUrl = 'mongodb+srv://codingSchoolDaniel:GKLomYzKfAuQ9SUj@coding-school-cluster.ehftrvr.mongodb.net/crud_example';
const receptasRoutes = require('./routes/receptasRoutes');

mongoose.connect(dbUrl)
    .then(() => app.listen(PORT))
    .catch(error => console.log(error));

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}));


app.get('/', (req,res) => {
    res.redirect('receptai/list')
});

app.use(receptasRoutes);