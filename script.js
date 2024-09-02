const mysql = require('mysql');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

function mysqlQuery() {
    return new Promise((resolve, reject) => {

        const sqlCreateTable = `CREATE TABLE IF NOT EXISTS people(name varchar(255))`
        const sql = `INSERT INTO people(name) values('Marcos'), ('Wesley'), ('Fullcycle')`
        connection.query(sqlCreateTable)
        connection.query(sql)

        const sqlResponse = `SELECT * FROM people`;
        connection.query(sqlResponse, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
    connection.end()
}

module.exports = { mysqlQuery };
