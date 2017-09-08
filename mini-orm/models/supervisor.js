const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');
let Projects = require('../models/projects.js')

class Supervisor {
    constructor(raw) {
        this.nama = raw.nama
        this.email = raw.email
        // `nama` dan `email`
    }

    static findAll() {
        let results = Supervisor.map(m => new Supervisor(m))
        return results
    }

    static findById() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Supervisor WHERE id = ${id}`, (err, row) => {
                if (!err) {
                    resolve(row)
                } else {
                    reject(err)
                }
            })
        })

    }

    static findWhere() {}

    static create(id) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Supervisor (name,email)
                    VALUES ('${reg.body.name}','${reg.body.email}')`, (err) => {
                if (!err) {
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