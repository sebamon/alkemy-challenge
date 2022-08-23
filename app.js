// import {express} from 'express'
const express = require('express')
const app = express()
const port = 3000

app.get('/'),(req,res) => {
    res.send('HOla')
}


app.listen(port,()=>{
    console.log(`Escuchando en puerto ${port}`)
})
