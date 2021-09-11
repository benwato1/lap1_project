const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const posts = require('./data')
const Post = require('./models')
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/', (req, res) => res.send('Welcome to the main page'))

app.get('/posts', (req,res) => {
  res.send(Post.all())
})

app.post('/posts', (req,res) => {
  console.log(req.body)
})








let port = 3000

app.listen(port, ()=> {
  console.log(`Server is up and running at localhost:${port}`)
})   