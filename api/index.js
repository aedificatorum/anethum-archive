const express = require("express");

const app = express();

app.get('/', (req, res, next) => {
  res.send('hello')
})

const port = process.env.PORT || 8881;

const server = app.listen(port, function() {
  console.log("listening")
})