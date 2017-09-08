const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');

class Projects {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.status = obj.status;
    }

    static getAll() {
        let promise = new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Projects`, (err, rows) => {
                if (!err) {
                    resolve(rows)
                } else {
                    reject(err)
                }
            })
        })
        return promise;
    }

}

module.exports = Projects