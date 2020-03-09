var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "piggy_bank.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
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
                console.log("Table already created.")
            }
        });  
    }
});


module.exports = db