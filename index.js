require('dotenv').config({ path: `${__dirname}/.env` })
const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/public/build`))

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/build/index.html`)
})

const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port ${SERVER_PORT}`)
)
