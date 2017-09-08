const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');
const bodyParser = require('body-parser')   
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// /project
// GET  /list        * menampilkan semua project
// GET  /add         * form untuk input project  baru
// POST /add         * untuk handle input project  baru
// GET  /update/:id  * form untuk update project
// POST /update/:id  * untuk handle update project
// GET  /delete/:id  * untuk handle delete project


let list = require('./routes/list');
app.use('/', list);

// var users = require('./routes/users');
// let supervisor = require('./routes/index')
let list = require('./routes/supervisor');
app.use('supervisor', list);
)


// app.get('/list', (req,res)=>{
//     res.render('list')
// })



// router.post('/',(req, res)=>{
//     let data_contact = {
//       name: `${req.body.name}`,
//       company: `${req.body.company}`,
//       telp: `${req.body.telp}`,
//       email: `${req.body.email}`
//     }

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })