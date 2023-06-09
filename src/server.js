const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PROT || 8080
const hostname = process.env.HOST_NAME

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})