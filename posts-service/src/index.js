const express = require('express');
const axios = require('axios');
const postsData = require('./posts.json');

const app = express();

app.get('/api/posts', async (req, res) => {
  console.log('RESPONSE FROM POST SERVICE - Posts')
  try {
    // const response = await axios('https://dummyapi.io/data/api/post', { headers: {'app-id': '5f66b69461c74cd0022cbdd7'}})
    const response = postsData.posts;
    res.send({ posts: response }) // Add .data when using the actual api
  } catch (error) {
    res.status(400).send(error.message || 'Something went wrong');  
  }
});

app.listen(3001, () => console.log('Listening on port 3001'))
