//Run dotenv on startup
require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 8000

app.use(cors(), express.urlencoded({ extended: true }), express.json())

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`)
})
