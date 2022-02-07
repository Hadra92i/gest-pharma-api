const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pharmacie = new Schema({
    name_fr: String,
    name_ar: String,
    adress_fr: String,
    adress_ar: String,
    id_wilaya: String,
    id_moughataa: String,
    tel: String,
    lati: String,
    longt: String,
    wilaya: String,
    wilaya_ar: String,
    moughataa: String,
    moughataa_ar: String
});

module.exports = mongoose.model('pharmacies', Pharmacie);
