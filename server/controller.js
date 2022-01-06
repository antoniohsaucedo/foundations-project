const posts = require('./db.json')
let globalId = 5

module.exports = {
    getPosts: (req, res) => {
        res.status(200).send(posts)
    },


    
  
    createPost: (req, res) => {
        const { imageURL, title, description, platform, followers, compensation,  } = req.body
        
        const newPost = { 
           id: 
            globalId, imageURL, title,  description, platform, followers, compensation
            
        }
        posts.push(newPost)
        res.status(201).send(posts)
        globalId++
    },


    deletePost: (req, res) => {
        let index = posts.findIndex(elem => elem.id === +req.params.id)
        posts.splice(index, 1)
        res.status(200).send(posts)

    },




    updatePost: (req, res) => {
        let { id } = req.params
        let { type } = req.body
       
    }

  
}