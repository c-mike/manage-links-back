const express = require('express')
// const db = require('./src/database')
const app = express()

app.use(express.json())

require('dotenv').config()

const protocol = process.env.PROTOCOL || "http"
const port = process.env.PORT || 8888

// db.authenticate()
//   .then(() => console.log('Database connected...'))
//   .catch(err => console.log('ERROR: '+ err))

// db.sync() // use only when u are altering the models/model file

const routes = require('./routes')
app.use(routes)

app.listen(port, () => {
  console.log(`
    Server started on ${protocol}://localhost:${port}
    `)
})
