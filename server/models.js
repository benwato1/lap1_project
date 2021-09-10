const posts = require("./data")

class Post {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.content = data.content 
        
    }

    static all() {
        return posts
    }

    static create(post) {
        const newPostId = posts.length + 1
        const newPost = new Post({id:newPostId, ...post})
        posts.push(newPost)
        return newPost
    }
}

module.exports = Post