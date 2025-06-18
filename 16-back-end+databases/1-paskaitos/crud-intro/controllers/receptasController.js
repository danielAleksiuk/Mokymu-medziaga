const Receptas = require('../models/receptas');

const receptas_list = (req, res) => {
    console.log('controler:')
    Receptas.find()
        .then(result => res.render('index', { receptai: result}))
        .catch(error => console.log(error));
};

const receptas_delete = (req, res) => {
    const id = req.params.id;

    Receptas.findByIdAndDelete(id)
        .then(() => res.json('/receptai/list'))
        .catch((e) => console.log(e));
}

const receptas_create_post = (req, res) => {
    const newReceptas = new Receptas(req.body);

    newReceptas.save()
        .then(() => res.json('/receptai/list'))
        .catch((e) => console.log(e));
}

const receptas_create_get = (req, res) => {
    res.render('create');
}

module.exports = {
    receptas_list,
    receptas_delete,
    receptas_create_post,
    receptas_create_get
};


// findOneAndUpdate 
// findOneAndDelete
// save