const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://jvbortoluzzi:********@cluster0.6np7auj.mongodb.net/publicacoes?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection;
