const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');

class Projects {
    constructor(obj){
      this.id = obj.id;
      this.name = obj.name;
      this.status = obj.status;
    }



}

module.exports = Projects  