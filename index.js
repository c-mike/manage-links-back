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

app.use((req, res, next) => {
  const allowedOrigins = ['*'];
  res.header('Access-Control-Allow-Origin', allowedOrigins);
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

const routes = require('./src/routes')
app.use(routes)

app.listen(port, () => {
  console.log(`
    Server started on ${protocol}://localhost:${port}
    `)
})
