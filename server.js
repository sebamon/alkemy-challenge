const express = require('express')
const cors = require('cors')
const app = express()

let corsOptions  = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
// parse requests of content-type - application/json

app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenidos Alkemy - NodeJS'
    })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
})
