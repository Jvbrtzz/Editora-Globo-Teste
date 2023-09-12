const { response } = require('express')
const Publicacao = require('../models/publicacaoData')

module.exports = {
    async create(req, res){   
        const {titulo, conteudo, data} = req.body

        if(!titulo || !conteudo || !data){
            return res.status(400).json({error:"mensagem invalida"})
        }
        try{
        const publicacoesCreated = await Publicacao.create({
            titulo,
            conteudo,
            data
        })
        return response.json(publicacoesCreated)
        }catch(err){
            console.error(err)
        }
    },

    async read(req, res){
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        try{
        const publicacoes = await Publicacao.find()
        return res.json(publicacoes)
    }catch(err){
        console.error(err)
    }
        
    }

}