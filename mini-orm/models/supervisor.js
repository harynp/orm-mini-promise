const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');


class Supervisor {
    constructor(raw) {
      this.nama = raw.nama
      this.email = raw.email
      // `nama` dan `email`
    }
  
    static findAll() {
      let results = models.map(m => new Model(m))
      return results
    }
  
    static findById() {}
  
    static findWhere() {}
  
    static create() {
        return new Promise((resolve, reject)=> {
            db.run(`INSERT INTO Supervisor (name,email)
                    VALUES ('${reg.body.name}','${reg.body.email}')`,(err)=>{
                      if(!err){
                        resolve('Insert Success')
                      } else {
                        reject(err)
                      }
            })
          })
    }
  
    static update() {}
  
    static destroy() {}
  
  }

  module.exports = Supervisor