const router = require('express').Router();
const Pharmacie = require('../models/Pharmacie');

// get all pharmacies
router.get('/', (req, res) => {
    Pharmacie.find((err, pharmacies) => {
        if (err) console.log("Error to get data : ", err);
        else res.send(pharmacies);
    });
});

// add new pharmacie
router.post('/', (req, res) => {
    const newPharmacie = new Pharmacie({
        name_fr: req.body.name_fr,
        adress_fr: req.body.adress_fr,
        tel: req.body.tel,
        lati: req.body.lati,
        longt: req.body.longt,
        wilaya: req.body.wilaya,
        moughataa: req.body.moughataa,
    });

    newPharmacie.save((err, newPharmacie) => {
        if (err) console.log(err);
        else res.send(newPharmacie);
    });
});

module.exports = router;

