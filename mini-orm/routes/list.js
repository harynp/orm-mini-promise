let express = require('express')
let router = express.Router()
// let Projects= require('../models/projects.js')

router.get('/', (req, res)=>{
    res.redirect('list')
  })

module.exports = router;