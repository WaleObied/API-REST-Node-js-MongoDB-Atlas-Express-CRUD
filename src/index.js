const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const inmuebleRoutes = require ("./routes/inmueble");

const app = express();
const port = 9000;

//middleware
app.use(express.json());
app.use('/api', inmuebleRoutes );


//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
 .then(() => console.log("connected to MongoDB Atlas"))
 .catch(err => console.error("error"));

app.listen(port, () => console.log('server escuchando en puerto 9000'));