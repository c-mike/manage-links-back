const express = require('express')
const db = require('./src/config/db')
const app = express()
require('dotenv').config()

app.use(express.json())

const protocol = process.env.PROTOCOL || "http"
const port = process.env.PORT || 8888

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('ERROR: '+ err))

// db.sync() // use only when u are altering the models/model file

const routes = require('./src/routes')
app.use(routes)

app.listen(port, () => {
  console.log(`
    Server started on ${protocol}://localhost:${port}
    `)
})
