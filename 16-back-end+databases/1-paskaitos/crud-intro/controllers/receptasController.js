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
        .then(() => res.redirect('/receptai/list'))
        .catch((e) => console.log(e));
}

const receptas_create_get = (req, res) => {
    res.render('create');
}

const receptas_edit_get = (req, res) => {
    const id = req.params.id;

    Receptas.findById(id)
        .then(result => res.render('edit', {receptas: result}))
        .catch(e => console.log(e));
}

const receptas_edit_put = (req, res) => {
    const {title, description, lelel, price} = new Receptas(req.body);
    const id = req.params.id;

    Receptas.findByIdAndUpdate(id, {title, description, lelel, price })
        .then( () => res.redirect('/receptai/list'))
        .catch(e => console.log(e));
}

module.exports = {
    receptas_list,
    receptas_delete,
    receptas_create_post,
    receptas_create_get,
    receptas_edit_get,
    receptas_edit_put

};


// findOneAndUpdate 
// findOneAndDelete
// save