const db = require('../db')

// GET //
exports.getAll = (req, res, next) => {
    var sql = "SELECT * FROM finance";
    var params = [];
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
    var sql = "SELECT * FROM finance WHERE fn_id = ?"
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

exports.getByType = (req, res, next) => {
    var sql = "SELECT * FROM finance WHERE fn_type = ? AND fn_ac_id = ?"
    var params = [req.params.type, req.params.ac_id]
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

    var sql = 'INSERT INTO finance (fn_type, fn_title, fn_balance, fn_is_remove, fn_create_date, fn_fc_id, fn_ac_id) VALUES (?,?,?,?,?,?,?)'
    var params = [req.body.type,
    req.body.title,
    req.body.balance,
        'N',
        date,
    req.body.fc_id,
    req.body.ac_id
    ]
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
    var sql = `UPDATE finance 
               SET fn_title = COALESCE(?,fn_title), 
                   fn_balance = COALESCE(?,fn_balance) 
               WHERE fn_id = ?`;
    var params = [req.body.title, req.body.balance, req.params.id];
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
    var sql = `UPDATE finance 
               SET fn_is_remove = 'Y'
               WHERE fn_id = ?`;
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

exports.getSummary = (req, res, next) => {
    var sql = "SELECT fn_id, fn_type, SUBSTRING(fn_create_date,0,4) AS year , SUBSTRING(fn_create_date,5,7) AS month , SUM(fn_balance) FROM finance Where fn_ac_id = ? AND fc_type = ? AND year = ? GROUP BY month";
    var params = [];
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
//Create by Passakorn Chaiya 