const express = require("express");

const app = express();

app.get('/api', (req, res, next) => {
  res.send('hello')
})

const server = app.listen(8881, function() {
  console.log("listening")
})