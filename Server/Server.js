const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('Do your best and leave the rest')
})

app.listen(port, () => {
  console.log(`My server **** empire://localhost:${port}`)
})