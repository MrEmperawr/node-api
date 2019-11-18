require('dotenv').config()

const { Pool } = require('pg')


const pool = new Pool({
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.PORT,
  ssl: false,
})

console.log(pool)

module.exports = { pool }