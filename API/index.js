    const express = require("express")
    const app = express();
    const cors = require('cors')
    const routes = require('./routes/routes')
    require('./config/dbConfig')
    const PORT = 3333 

    app.use(cors({
        origin: 'http://localhost:3000'     
    }));
    app.use(express.json())
    app.use(routes);
    
    try {
        app.listen(PORT, () => {
            console.log(`Rodando no ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }