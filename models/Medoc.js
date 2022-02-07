const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Medoc = new Schema({
    name: String,
    forme_dosage: String,
    pp: String
});

module.exports = mongoose.model('medocs', Medoc);
