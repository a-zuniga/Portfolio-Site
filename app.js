const express = require('express')
const app = express()
const port = 3000

// Home route
app.get('/', (req, res) => {
  res.sendFile('home.html', {root : __dirname + '/assets'});
})

// 404 Response
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})