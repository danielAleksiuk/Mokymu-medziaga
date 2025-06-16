const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

// app.get('/mano-pirmas', (req, res) => {
//     res.send(
//         '<h1>hello mano pirmoji express uzklausa</h1>'
//     );
// });


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

    res.render('./ejs/index', {blogs});
});


app.get('/apie', (req, res) => {
    res.render('./ejs/apie', {manoInfo: 'mano info is serviso'});
});

app.get('/createBlog', (req, res) => {
    res.render('./ejs/createBlog');
});

app.post('/create-blog', (req, res) => {
    console.log(req);
})