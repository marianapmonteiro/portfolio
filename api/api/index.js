const express = require("express");
const cors = require('cors');


require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: '*'
}));

app.use(express.json());

const router = require("../router.js");

app.use('/api', router);


const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

module.exports = app;