const mongoose = require('mongoose');

const histSchema = new mongoose.Schema({
    historico: {
        type: Array
    },
})

const Historico = mongoose.model("Historico", histSchema );

module.exports = Historico;