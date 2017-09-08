let express = require('express')
let router = express.Router()
// let Projects= require('../models/projects.js')

router.get('/list', (req, res)=>{
    res.redirect('list.ejs')
  })

module.exports = router;