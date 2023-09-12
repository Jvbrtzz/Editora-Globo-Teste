const express = require('express')
const routes = express.Router()
const publicacaoData = require('../controllers/publicacaoController')

routes.post('/publicacoes', publicacaoData.create)
routes.get('/publicacoes', publicacaoData.read)

module.exports = routes;