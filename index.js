// console.log("Hello");

require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.get('/login',(req,res)=>{
    res.send(`<h1>Please login</h1>`)
})


const githubData ={
    "login": "utkarshsingh004",
    "id": 170230471,
    "node_id": "U_kgDOCiWCxw",
    "avatar_url": "https://avatars.githubusercontent.com/u/170230471?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/utkarshsingh004",
    "html_url": "https://github.com/utkarshsingh004",
    "followers_url": "https://api.github.com/users/utkarshsingh004/followers",
    "following_url": "https://api.github.com/users/utkarshsingh004/following{/other_user}",
    "gists_url": "https://api.github.com/users/utkarshsingh004/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/utkarshsingh004/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/utkarshsingh004/subscriptions",
    "organizations_url": "https://api.github.com/users/utkarshsingh004/orgs",
    "repos_url": "https://api.github.com/users/utkarshsingh004/repos",
    "events_url": "https://api.github.com/users/utkarshsingh004/events{/privacy}",
    "received_events_url": "https://api.github.com/users/utkarshsingh004/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Utkarsh Kumar Singh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I am a pre-final year B.Tech (Computer Science and Engineering) student. A front-end web developer. Tech-explorer 🚀",
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2024-05-19T08:19:17Z",
    "updated_at": "2024-12-10T19:43:24Z"
  }
app.get('/github',(req,res)=>{
    res.json(githubData)
})

// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`);

// })

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);

})

// app.listen(process.env.PORT,()=>{
//     console.log(`Example app listening on port ${port}`);

// })
