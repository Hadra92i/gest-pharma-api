const router = require('express').Router();
const Medoc = require('../models/Medoc');
const objectId = require('mongoose').Types.ObjectId;

// get all medocs
router.get('/medocs', (req, res) => {
    Medoc.find((err, medocs) => {
        if (err) console.log("Error to get data : ", err);
        else res.send(medocs);
    });
});

// get one medoc by id
router.get('/medocs/:id', (req, res) => {
    if (objectId.isValid(req.params.id)) {
        Medoc.findById(req.params.id, (err, medoc) => {
            if (err) console.log(err);
            else res.send(medoc);
        });
    } else
        console.log("Error the id is not valid : " + req.params.id);
});

// update medoc by id
router.put('/medocs/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send("Error the id is not valid : " + req.params.id);

    const medocToUpdate = {
        name: req.body.name,
        forme_dosage: req.body.forme_dosage,
        pp: req.body.pp,
    }

    Medoc.findByIdAndUpdate(
        req.params.id,
        {
            $set: medocToUpdate
        },
        {
            new: true
        },
        (err, medocUpdated) => {
            if (err) console.log(err);
            else res.send(medocUpdated);
        }
    )
});

// delete medoc by
router.delete('/medocs/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send("Error the id is not valid : " + req.params.id);

    Medoc.findByIdAndRemove(req.params.id, (err, medocToDelete) => {
        if (err) console.log(err);
        res.send(medocToDelete);
    });
});

module.exports = router;