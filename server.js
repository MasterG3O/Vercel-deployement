const express = require('express')
const { builtinModules } = require('module')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(3000)

modules.export = app