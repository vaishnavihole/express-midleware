const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home Page')
})


app.get('/users', (req, res) => {
    res.send('User Page')
})

function logger(req, res, next) {
    console.log();
}

app.listen(3000)