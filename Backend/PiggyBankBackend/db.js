var sqlite3 = require('sqlite3').verbose()

var path = require('path');
var userName = process.env['USERPROFILE'].split(path.sep)[2];

var DIRPATH = "C:/USERS/" + userName;

var fs = require('fs');

var DIRNAME = 'PiggyBank';

var DBPATH = DIRPATH + "/" + DIRNAME;

if (!fs.existsSync(DBPATH)) {
  fs.mkdirSync(DBPATH);
}

const DBNAME = "piggy_bank.db";

const DBSOURCE = DBPATH + "/" + DBNAME

let tbList = [
  // create table account
  {
    tableName: "account",
    sql: `CREATE TABLE account (
            ac_id INTEGER PRIMARY KEY AUTOINCREMENT,
            ac_name text, 
            ac_create_date text, 
            ac_is_remove text, 
            ac_img_path text
          )`
  },
  // create table financial_category
  {
    tableName: "financial_category",
    sql: ` CREATE TABLE financial_category (
              fc_id INTEGER PRIMARY KEY AUTOINCREMENT,
              fc_name text,
              fc_type INTEGER,
              fc_is_remove text,
              fc_create_date text,  
              fc_img_path text,
              fc_is_permanent text
          )`
  },
  // create table finance
  {
    tableName: "finance",
    sql: ` CREATE TABLE finance (
              fn_id INTEGER PRIMARY KEY AUTOINCREMENT,
              fn_type INTEGER,
              fn_title text,
              fn_balance REAL,
              fn_is_remove text,
              fn_create_date text,  
              fn_fc_id INTEGER,
              fn_ac_id INTEGER
          )`
  }
];

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')

    tbList.forEach(element => {
      db.run(element.sql, (err) => {
          if (err) {
            // Table already created
            console.log(`Table name ${element.tableName} is already created.`);
          }
        }
      );

    });
  }
});

module.exports = db