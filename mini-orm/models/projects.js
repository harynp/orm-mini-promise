const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');

class Projects {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.status = obj.status;
    }

    static findAll() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Projects`, (err, rows) => {
                if (!err) {
                    resolve(rows)
                } else {
                    reject(err)
                }
            })
        })
    }

    static findById(id) {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Projects WHERE id = ${id}`, (err, row) => {
                if (!err) {
                    resolve(row)
                } else {
                    reject(err)
                }
            })
        })
    }

    static create(id) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Projects (name,status)
                VALUES ('${reg.body.name}','${reg.body.status}')`, (err) => {
                if (!err) {
                    resolve('Insert Success')
                } else {
                    reject(err)
                }
            })
        })
    }



}


module.exports = Projects