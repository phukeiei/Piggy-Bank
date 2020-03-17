const db = require('../db')

// GET //
exports.getAll = (req, res, next) => {
    var sql = "SELECT * FROM financial_category_account"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
};

exports.getById = (req, res, next) => {
    var sql = "SELECT * FROM financial_category_account WHERE fca_id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": row
        })
    });
};

// POST //
exports.insert = (req, res, next) => {

    /* Set Format of Current Date */
    var current_date = new Date();
    var current_day = current_date.getDate();
    var current_month = current_date.getMonth() + 1;
    var current_year = current_date.getFullYear();
    if (current_day < 10) {
        current_day = '0' + current_day;
    }

    if (current_month < 10) {
        current_month = '0' + current_month;
    }

    var date = current_year + '-' + current_month + '-' + current_day;
    /* Set Format of Current Date END */

    var sql = 'INSERT INTO financial_category_account (fca_ac_id, fca_fc_id, fca_create_date) VALUES (?,?,?)';
    var params = [req.body.ac_id, req.body.fc_id, date];
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "id": this.lastID
        })
    });
};
