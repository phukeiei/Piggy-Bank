const db = require('../db')

// GET //
exports.getAll = (req, res, next) => {
    var sql = "SELECT * FROM account"
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
    var sql = "SELECT * FROM account WHERE ac_id = ?"
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

    var sql = 'INSERT INTO account (ac_name, ac_create_date, ac_is_remove, ac_img_path) VALUES (?,?,?,?)'
    var params = [req.body.name,
                    date,
                    'N',
                    req.body.img_path]
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

// PUT //
exports.updateById = (req, res, next) => {
    var sql = `UPDATE account 
               SET ac_name = COALESCE(?,ac_name), 
                   ac_img_path = COALESCE(?,ac_img_path) 
               WHERE ac_id = ?`;
    var params = [req.body.name, req.body.img_path, req.params.id];
    db.run(sql, params, function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.json({
                message: "success",
                changes: this.changes
            })
        }
    );
};

exports.removeById = (req, res, next) => {
    var sql = `UPDATE account 
               SET ac_is_remove = 'Y'
               WHERE ac_id = ?`;
    var params = [req.params.id];
    db.run(sql, params, function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.json({
                message: "success",
                changes: this.changes
            })
        }
    );
};