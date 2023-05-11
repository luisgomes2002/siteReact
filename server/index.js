const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Luisgustavo2002',
  database: 'user accounts'
})

app.post('/register', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  //const age = req.body.age

  db.query('INSERT INTO users (user_name, user_email, user_password) VALUES (?,?,?)',
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('Values inserted')
      }
    }
  )
})

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})