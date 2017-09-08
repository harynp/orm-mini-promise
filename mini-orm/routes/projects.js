let express = require('express')
let router = express.Router()
let Projects = require('../models/projects.js')

router.get('/list', (req, res) => {
    res.redirect('list')
})


router.get('/list', (req, res) => {
    Projects.getAll()
        .then(proj => {
            res.render('list')
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/add', (req, res) => {
    Projects.create(id)
        .then(rows => {
            res.redirect('addprojects')
        })
        .catch(err => {
            res.send(err)
        })
})



module.exports = router;