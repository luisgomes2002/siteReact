const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

//const bodyParser = require('body-parser')
//const cookieParser = require('cookie-parser')
//const session = require('express-session')

//const bcrypt = require('bcrypt')
//const saltRounds = 10;

const app = express()

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Luisgustavo2002',
  database: 'user accounts',
})

app.post('/register', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  db.query(
    'INSERT INTO users (user_name, user_email, user_password) VALUES (?,?,?)',
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('Values Inserted');
      }
    }
  )
})

app.get('/login', (req, res) => {
  const name = req.body.name
  const password = req.body.password

  db.query(
    'SELECT * FROM users WHERE user_name = ? AND user_password = ?',
    [name, password],
    (err, result) => {
      if (err) {
        res.send({ err: err })
      }

      if (result.length > 0) {
        res.send('Values Inserted');
      } else {
        res.send({ message: 'Wrong name/password combination!' })
      }
    }
  )
})

app.listen(3001, () => {
  console.log('Yey, server is running on port 3001');
})