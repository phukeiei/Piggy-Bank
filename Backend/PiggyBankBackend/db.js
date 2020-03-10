var sqlite3 = require('sqlite3').verbose()

var path = require('path');
var userName = process.env['USERPROFILE'].split(path.sep)[2];

var DIR = "C:/USERS/" + userName;

var fs = require('fs');
var DBPATH = DIR + "/" + 'PiggyBank';

if (!fs.existsSync(DBPATH)) {
  fs.mkdirSync(DBPATH);
}

const DBNAME = "piggy_bank.db";

const DBSOURCE = DBPATH + "/" + DBNAME

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
    db.run(
      `CREATE TABLE account (
          ac_id INTEGER PRIMARY KEY AUTOINCREMENT,
          ac_name text, 
          ac_create_date text, 
          ac_is_remove text, 
          ac_img_path text
      )`,
      (err) => {
        if (err) {
          // Table already created
          console.log("Table name account is already created.")
        }
      }
    );

    db.run(
      ` CREATE TABLE financial_category (
            fc_id INTEGER PRIMARY KEY AUTOINCREMENT,
            fc_name text,
            fc_type INTEGER,
            fc_is_remove text,
            fc_create_date text,  
            fc_img_path text,
            fc_is_permanent text
        )`,
      (err) => {
        if (err) {
          // Table already created
          console.log("Table name financial_category is already created.")
        }
      }
    );
  }
});

module.exports = db