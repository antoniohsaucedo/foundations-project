const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json()) //this allow us to parse JSON into a javascript object
app.use(cors())

const { getPosts, deletePost, createPost, updatePost} = require('./controller')


app.get('/api/posts', getPosts)
app.delete('/api/posts/:id', deletePost)
app.post('/api/posts', createPost)
app.put('/api/posts/:id', updatePost)

app.listen(4004, () => console.log(`running on 4004`))


