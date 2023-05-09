const { Pool } = require('pg');
const dotenv = require('dotenv').config();
const connectionString = process.env.PG_URI;

const pool = new Pool({
  connectionString,
});
console.log('inside pg file');
pool.connect();

//DEFINE AND CREATE SCHEMA
const createSchemaQuery = 'CREATE SCHEMA IF NOT EXISTS mega_marketable_schema';
async function createSchema() {
  try {
    await pool.query(createSchemaQuery);
    console.log('Scheme creation successful');
  } catch (err) {
    console.log('Error creating schema: ', err);
  }
}

//DEFINE AND CREATE USER TABLE
const createUserTableQuery = `CREATE TABLE IF NOT EXISTS users (
  username VARCHAR(24) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (username)
  )`;
async function createUserTable() {
  try {
    await pool.query(createUserTableQuery);
    console.log('User table creation successful');
  } catch (err) {
    console.log('Error creating user table: ', err);
  }
}
//Invoke both to get database running, if this is the first time it creates the schema and table, if not it just runs and skips this step
createSchema();
createUserTable();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
