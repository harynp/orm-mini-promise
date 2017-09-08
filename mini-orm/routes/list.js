let express = require('express')
let router = express.Router()
let Projects= require('../models/projects.js')

router.get('/', (req, res) => {
    res.render('list', {});
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