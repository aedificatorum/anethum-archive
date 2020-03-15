const express = require("express");
const { Pool } = require("pg");
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString
})

const app = express();
app.use(express.static('public'))

app.get('/api', (req, res, next) => {
  res.send('hello')
})

app.get('/db', async (req, res, next) => {
  const result = await pool.query('select * from test')
  res.json(result.rows)
})

const port = process.env.PORT || 8881;

const server = app.listen(port, function() {
  console.log("listening")
})