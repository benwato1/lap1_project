const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());

const fs = require('fs')

const blogPosts = fs.readFileSync('posts.json')
const blogPostDB = JSON.parse(blogPosts)


app.use(express.json());


app.get('/', (req, res) => res.send('Welcome to the main page'))

// app.get('/posts', (req,res) => {
//   res.send(Post.all())
// })

app.get('/posts', (req,res) => {
  res.send(blogPostDB)
})

app.post('/posts', (req,res) => {
  // console.log(req.body)
  // const nextPost = JSON.stringify(req.body, null, 2)
  console.log(req.body)
  blogPostDB.push(req.body) // receives the newpost and pushes it to the database array
  // console.log(blogPostDB)
  stringblogPostDB = JSON.stringify(blogPostDB)
  // console.log(blogPostDB)
  // fs.writeFile('posts.json', nextPost, () => console.log('all done'))
  // const jsonblogdb = JSON.parse(stringblogPostDB)
  fs.writeFile('posts.json',stringblogPostDB, () => console.log('it worked') )
  res.send(stringblogPostDB)
  

})

// res.send(JSON.parse(stringblogPostDB))






let port = 3000

app.listen(port, ()=> {
  console.log(`Server is up and running at localhost:${port}`)
})   