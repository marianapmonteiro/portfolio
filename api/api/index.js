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

console.log('Iniciando a função ping...');

setInterval(() => {
    console.log("ping");
}, 300000); // 300000 ms = 5 minutos

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

module.exports = app;