let express = require('express')
let router = express.Router()
let Supervisor= require('../models/supervisor.js')

router.get('/supervisor', (req, res)=>{ 
Projects.getAll()
  .then(proj => {
    res.redirect('supervisor')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router;