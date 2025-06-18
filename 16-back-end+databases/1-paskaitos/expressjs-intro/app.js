const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://codingSchoolDaniel:GKLomYzKfAuQ9SUj@coding-school-cluster.ehftrvr.mongodb.net/sample_mflix';

mongoose.connect(dbUrl)
    .then(result => {
        console.log('prie DB pasijungiau');
        console.log(result)
    })
    .catch(error => console.log(error));

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id: {type: Schema.Types.ObjectId },
    name: {type: String},
    email: {type: String},
    password: {type: String}
}, {collection: 'users'})



// sample_mflix.users
const User = mongoose.model('user', userSchema);
// const collectionName = User.collection.collectionName;

app.set('view engine', 'ejs');

// app.get('/mano-pirmas', (req, res) => {
//     res.send(
//         '<h1>hello mano pirmoji express uzklausa</h1>'
//     );
// });v


// app.listen(port)
app.listen(port, () => {
    console.log('mano expressas veikia ant :' + {port} + ' porto');
});

// app.get('/', (req, res) => {
//     res.sendFile('./views/html/index.html', {root: __dirname})
// });

// app.get('/apie', (req, res) => {
//     res.sendFile('./views/html/apie.html', {root: __dirname})
// });

// app.use((req, res) => {
//     res.status(404).sendFile('./views/html/404.html', {root: __dirname});
// })

//  EJS routaoi
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    const blogs = [
        {title: 'node.js pamoka', santrauka: 'lorem lorem'},
        {title: 'express.js pamoka', santrauka: 'lorem lorem'},
        {title: 'mongo db pamoka', santrauka: 'lorem lorem'}
    ]

    // console.log(collectionName);
    // console.log(User)

    User.find().limit(10)
        .then(result =>console.log(result))
        .catch(error => console.log(error));

    res.render('./ejs/index', {blogs});
});


app.get('/apie', (req, res) => {
    new User({
        name: 'mano-pvz',
        email: 'pvz-email',
        password: 'pvz0pvz'
    }).save().then(result => console.log(result));

    res.render('./ejs/apie', {manoInfo: 'mano info is serviso'});
});

app.get('/createBlog', (req, res) => {
    res.render('./ejs/createBlog');
});

app.post('/create-blog', (req, res) => {
    console.log(req);
});

app.get('/userList', async (req, res) => {
    const useriai = await User.find().limit(25);
    console.log(useriai);
    res.render('./ejs/userList', {users: useriai});
})

//  user - codingSchoolDaniel
//  psw - GKLomYzKfAuQ9SUj



// 1. papildyti navbar - user list
// 2. sukurti user listo puslapi
// 3. atvaizduoti is DB gautus userius
// 4. html pavidalu su lentele
