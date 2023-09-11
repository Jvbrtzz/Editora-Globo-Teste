const express = require("express")
const app = express();
const routes = require('./routes/routes')
require('./config/dbConfig')
const PORT = 3333 

app.use(express.json())
app.use(routes)

app.listen(PORT, console.log(`Rodando no ${PORT}`))
