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
              fn_balance REAL,
              fn_is_remove text,
              fn_create_date text,  
              fn_fc_id INTEGER,
              fn_ac_id INTEGER
          )`
  },
  // create table finance
  {
    tableName: "financial_category_account",
    sql: ` CREATE TABLE financial_category_account (
              fca_id INTEGER PRIMARY KEY AUTOINCREMENT,
              fca_ac_id INTEGER,
              fca_fc_id INTEGER,
              fca_create_date text
          )`
  }
];
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

let incomeCategoryList = [
  {
    name: "เงินเดือน",
    type: 2,
    is_remove: "N",
    create_date: date,
    img_path: "statics/incomeicons/salary.png",
    is_permanent: "Y"
  },
  {
    name: "โบนัส",
    type: 2,
    is_remove: "N",
    create_date: date,
    img_path: "statics/incomeicons/bonus.png",
    is_permanent: "Y"
  },
  {
    name: "ลอตเตอร์รี่",
    type: 2,
    is_remove: "N",
    create_date: date,
    img_path: "statics/incomeicons/lottery.png",
    is_permanent: "Y"
  },
  {
    name: "หุ้น",
    type: 2,
    is_remove: "N",
    create_date: date,
    img_path: "statics/incomeicons/market.png",
    is_permanent: "Y"
  },
  {
    name: "เงิน",
    type: 2,
    is_remove: "N",
    create_date: date,
    img_path: "statics/incomeicons/money.png",
    is_permanent: "Y"
  },
  {
    name: "ทุนการศึกษา",
    type: 2,
    is_remove: "N",
    create_date: date,
    img_path: "statics/incomeicons/scholarship.png",
    is_permanent: "Y"
  }
];

let expenseCategoryList = [
  {
    name: "เสื้อผ้า",
    type: 1,
    is_remove: "N",
    create_date: date,
    img_path: "statics/expenseicons/clothing.png",
    is_permanent: "Y"
  },
  {
    name: "เครื่องดื่ม",
    type: 1,
    is_remove: "N",
    create_date: date,
    img_path: "statics/expenseicons/drink.png",
    is_permanent: "Y"
  },
  {
    name: "อาหาร",
    type: 1,
    is_remove: "N",
    create_date: date,
    img_path: "statics/expenseicons/food.png",
    is_permanent: "Y"
  },
  {
    name: "ค่ารักษา",
    type: 1,
    is_remove: "N",
    create_date: date,
    img_path: "statics/expenseicons/medicine-cost.png",
    is_permanent: "Y"
  },
  {
    name: "ปาร์ตี้",
    type: 1,
    is_remove: "N",
    create_date: date,
    img_path: "statics/expenseicons/party.png",
    is_permanent: "Y"
  },
  {
    name: "ค่าน้ำ-ค่าไฟ",
    type: 1,
    is_remove: "N",
    create_date: date,
    img_path: "statics/expenseicons/rent.png",
    is_permanent: "Y"
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
        } else {
          // Table just created, creating some rows

          if (element.tableName == "financial_category") {
            let insert = 'INSERT INTO financial_category (fc_name, fc_type, fc_is_remove, fc_create_date, fc_img_path, fc_is_permanent) VALUES (?,?,?,?,?,?)'
            
            incomeCategoryList.forEach(element => {
              db.run(insert, [element.name, element.type, element.is_remove, element.create_date, element.img_path, element.is_permanent]);
            });

            expenseCategoryList.forEach(element => {
              db.run(insert, [element.name, element.type, element.is_remove, element.create_date, element.img_path, element.is_permanent]);
            });
          }
        }
      });
    });
  }
});

module.exports = db