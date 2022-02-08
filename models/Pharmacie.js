const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pharmacie = new Schema({
    name_fr: String,
    adress_fr: String,
    tel: String,
    lati: String,
    longt: String,
    wilaya: String,
    moughataa: String,
});

module.exports = mongoose.model('pharmacies', Pharmacie);
