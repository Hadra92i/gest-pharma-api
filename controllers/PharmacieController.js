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
        name_fr: req.body.nameFr,
        name_ar: req.body.nameAr,
        adress_fr: req.body.adressFr,
        adress_ar: req.body.adressAr,
        tel: req.body.tel,
        lati: req.body.lati,
        longt: req.body.longt,
        wilaya: req.body.wilayaFr,
        wilaya_ar: req.body.wilayaAr,
        moughataa: req.body.moughataaFr,
        moughataa_ar: req.body.moughataaAr
    });

    newPharmacie.save((err, newPharmacie) => {
        if (err) console.log(err);
        else res.send(newPharmacie);
    });
});

module.exports = router;

