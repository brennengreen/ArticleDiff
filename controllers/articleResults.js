const db = require("../models")

let results = db.query('SELECT * FROM companies', [], (err, res) => {
    if (err) {
        return err
    }
    return res.rows
})