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



module.exports = router;