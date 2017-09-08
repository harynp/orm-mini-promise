const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')

db.serialize(() => {
    // `nama`, `status`
    db.run(`CREATE TABLE Projects 
    (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255), status VARCHAR(255))`,() => {
        console.log('Create Table Projects berhasil')
    })
    // `nama` dan `email`
    db.run(`CREATE TABLE Supervisor
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255),email VARCHAR(255))`,() => {
        console.log('Create Table Supervisor berhasil')
    })
})