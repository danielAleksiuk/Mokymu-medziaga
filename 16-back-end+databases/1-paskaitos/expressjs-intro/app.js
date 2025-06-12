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
    res.render('./ejs/index')
});


app.get('/apie', (req, res) => {
    res.render('./ejs/apie')
});