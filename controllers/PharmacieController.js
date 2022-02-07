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
        name_ar: req.body.name_ar,
        adress_fr: req.body.adress_fr,
        adress_ar: req.body.adress_ar,
        tel: req.body.tel,
        lati: req.body.lati,
        longt: req.body.longt,
        wilaya: req.body.wilaya,
        wilaya_ar: req.body.wilaya_ar,
        moughataa: req.body.moughataa,
        moughataa_ar: req.body.moughataa_ar
    });

    newPharmacie.save((err, newPharmacie) => {
        if (err) console.log(err);
        else res.send(newPharmacie);
    });
});

module.exports = router;

