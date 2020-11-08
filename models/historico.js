const mongoose = require('mongoose');

const histSchema = new mongoose.Schema({
    historico: {
        type: Array
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Historico = mongoose.model("Historico", histSchema );
module.exports = Historico;