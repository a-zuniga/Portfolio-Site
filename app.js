const express = require('express')
const app = express()
const port = 3000

// Lets express load the files that are in assets
app.use(express.static(__dirname + '/assets'));

// Home route
app.get('/', (req, res) => {
  res.sendFile('home.html', {root : __dirname + '/assets'});
})

// 404 Response
app.use(function (req, res, next) {
  res.status(404).sendFile('404.html', {root : __dirname + '/assets'});
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})