const express = require('express')
// const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Get req has been made successfully')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})
router.get('/', (req, res) => {
    res.send('Get req has been made successfully')
})


module.exports = router