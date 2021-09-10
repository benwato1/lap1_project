const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const fullResults = require('./data')


app.get('/', (req, res) => res.send('Welcome to the main page'))


let port = 3000

app.listen(port, ()=> {
  console.log(`Server is up and running at localhost:${port}`)
})   