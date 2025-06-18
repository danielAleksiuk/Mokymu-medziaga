const Receptas = require('../models/receptas');

const receptas_list = (req, res) => {
    console.log('controler:')
    Receptas.find()
        .then(result => res.render('index', { receptai: result}))
        .catch(error => console.log(error));
};

module.exports = {
    receptas_list
};