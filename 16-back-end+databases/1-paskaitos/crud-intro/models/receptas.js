const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReceptasSchema = new Schema({
    title: {type: String, required: true},
    level: {type: Number, required: true}, // reikia ideti type, toki pat kaip mongoDB
    description: {type: String, required: true},
    price: {type: Number, required: true}
}, {collection: 'receptai'});

const Receptas = mongoose.model('Receptas', ReceptasSchema);

module.exports = Receptas;

