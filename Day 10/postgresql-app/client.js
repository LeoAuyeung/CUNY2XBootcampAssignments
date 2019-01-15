// npm install --save pg to be able to require pg
//const pg = require("pg");
// configure the path to the database that you wish to interact with
const postgresUrl= 'postgres://localhost/input_app'
// create a new client 
//const client = new pg.Client(postgresUrl)

const {Client} = require('pg');

const client = new Client({
    user: 'postgres', //process.env.PGUSER
    host: 'localhost',  
    database: 'input_app',
    password: 'password',
    port: 5432
})

client.connect()

client.query('select * from input', (err, data) => {
    if (err) return console.error(err);
      console.log(data);
})

module.exports = client;