const express = require('express')
const http = require('http')
const cors = require('cors')

const app = express()
const server = http.createServer(app)


// let corsOptions  = {
//     origin: "http://localhost:8081"
// }

// app.use(cors(corsOptions))

// app.use(express.json())
// // parse requests of content-type - application/json

// app.use(express.urlencoded({ extended: true }))  // ????
// parse requests of content-type - application/x-www-form-urlencoded

if(process.env.NODE_ENV !== "production"){
    require('dotenv/config')
}

// const db = require('./app/models')
// db.sequelize.sync()
//     .then( () => {
//         console.log('Sync Db')
//     })
//     .catch((err) => {
//         console.log('Error sunc db: '+err.message)
//     })


//Rutas
app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenidos Alkemy - NodeJS'
    })
})



//Server Run
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
})
