const mongoose = require('mongoose');

const PublicacaoDataSchema = new mongoose.Schema({
    titulo: String,
    conteudo: String,
    data: String
})

module.exports = mongoose.model('publicacao', PublicacaoDataSchema)