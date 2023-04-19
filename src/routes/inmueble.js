const express = require('express');
const inmuebleSchema = require('../models/inmueble');

const router = express.Router();

//crear inmueble
router.post("/inmuebles", (req, res) => {
    const inmueble = inmuebleSchema(req.body);
    inmueble
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

//get all inmuebles
router.get("/inmuebles", (req, res) => {
    inmuebleSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

//get a inmueble
router.get("/inmuebles/:id", (req, res) => {
    const {id} = req.params;
    inmuebleSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

//update a inmueble
router.put("/inmuebles/:id", (req, res) => {
    const {id} = req.params;
    const {piso, letra, extension, habitaciones, alquilado, propietario, email} = req.body;
    inmuebleSchema
    .updateOne({_id: id}, {$set: {piso, letra, extension, habitaciones, alquilado, propietario, email}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

//delete a inmueble
router.delete("/inmuebles/:id", (req, res) => {
    const {id} = req.params;
    inmuebleSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});





module.exports = router;