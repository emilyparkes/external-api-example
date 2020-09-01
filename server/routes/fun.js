const express = require('express')
const request = require('superagent')

const router = express.Router()

// Tell Express.js how to read data POSTed to this router
// We normally do this on the server for all routes
router.use(express.json())

module.exports = router

// GET /api/v1/items
// returns an array of items
router.get('/', (req, res) => {
    return request 
    .get('http://shibe.online/api/birds')
    .then(resp => {
        res.json(resp.body)
    })
})