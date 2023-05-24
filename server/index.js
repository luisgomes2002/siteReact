const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const bcrypt = require('bcrypt')
const saltRounds = 10

const app = express()

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  session({
    key: 'userId',
    secret: '1234',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
)

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Luisgustavo2002',
  database: `user accounts`,
})

app.post('/register', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }

    db.query(
      'INSERT INTO users (user_name, user_email, user_password) VALUES (?,?,?)',
      [name, email, hash],
      (err, result) => {
        console.log(err)
      }
    )
  })
})

app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user })
  } else {
    res.send({ loggedIn: false })
  }

})

// app.get("/login", (req, res) => {
//   db.query("SELECT * FROM users", (err, result) => {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(result)
//     }
//   })
// })

app.post("/login", (req, res) => {
  const name = req.body.name
  //const email = req.body.email
  const password = req.body.password

  db.query(
    'SELECT * FROM users WHERE user_name = ?',
    [name],
    (err, result) => {
      if (err) {
        res.send({ err: err })
      }

      if (result && result.length > 0) {
        bcrypt.compare(password, result[0].user_password, function (error, response) {
          if (response) {
            req.session.user = result[0]
            console.log(req.session.user)
            res.send({ loggedIn: true, user: result[0], message: 'Connected' })
          } else {
            res.send({ loggedIn: false, message: 'Wrong username/password combination!' })
            console.log(error)
          }
        })
      } else {
        res.send({ loggedIn: false, message: "User doesn't exist" })
        console.log(err)
      }
    }
  )
})


app.listen(3001, () => {
  console.log('Server is running on port 3001')
})