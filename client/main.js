const postsContainer = document.querySelector('#posts-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/posts`

const postsCallback = ({ data: posts }) => displayPosts(posts)
const errCallback = err => console.log(err.response?.data)

const getAllPosts = () => axios.get(baseURL).then(postsCallback).catch(errCallback)
const createPost = body => axios.post(baseURL, body).then(postsCallback).catch(errCallback)
const deletePost = id => axios.delete(`${baseURL}/${id}`).then(postsCallback).catch(errCallback)
const updatePost = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(postsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let imageURL = document.querySelector('#img')
    let title = document.querySelector('#title')
    let description = document.querySelector('#description')
    let platform = document.querySelectorAll('input[type=checkbox]:checked')
    let followers = document.querySelector('#followers')
    console.log(platform)
    let compensation = document.querySelector('#compensation')



    let platformNodes = platform.values()

    const platformNames = []

    for(let node of platformNodes){
    platformNames.push(node.value)  
}



console.log(platformNames)

    let bodyObj = {
        
        imageURL: imageURL.value,
        title: title.value,
        description: description.value,
        platform: platformNames,
        followers: followers.value,
        compensation: compensation.value 
    }
    

    createPost(bodyObj)
    imageURL.value = ''
    title.value = ''
    description.value = ''
    platform.checked = false
    followers.value = ''
    compensation.value = ''

    
}

function createPostCard(post) {
    const postCard = document.createElement('div')

    postCard.classList.add('post-card')

    
    postCard.innerHTML = `<img alt='post cover' src=${post.imageURL} class="post-cover"/>
   

    <h4 class="post-title">${post.title}</h4>

    <p class="post-description">${post.description}</p>

    <h4 class="post-titles">Social Media Platform</h4>
    <ul class="post-platform">${post?.platform?.join(" - ")}</ul>

    
    <h4 class="post-titles">Followers Required</h4>
    <p class="post-followers">${post.followers}</p>
    <h4 class="post-titles">Compensation</h4>
    <p class="post-compensation">${post.compensation}</p>

    <div class="btns-container">
      
    </div>
    <button onclick="deletePost(${post.id})">delete</button>
    `


    postsContainer.appendChild(postCard)
}




function displayPosts(arr) {
    postsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPostCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllPosts()






