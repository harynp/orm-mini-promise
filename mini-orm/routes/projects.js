let express = require('express')
let router = express.Router()
let Projects= require('../models/projects.js')

router.get('/list', (req, res)=>{ 
Projects.getAll()
  .then(proj => {
    res.redirect('list')
  })
  .catch(err => {
    res.send(err)
  })
})


module.exports = router;