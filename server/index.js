const express = require('express')
const app = express()
const consign = require('consign')

consign()
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})