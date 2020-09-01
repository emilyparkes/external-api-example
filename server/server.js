const path = require('path')
const express = require('express')

const server = express()

const fun = require('./routes/fun')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/fun', fun)

module.exports = server
