const express = require('express');
const axios = require('axios');

const usersData = require('./users.json');

const app = express();

app.get('/api/users', async (req, res) => {
  console.log('RESPONSE FROM USER SERVICE - Users')
  try {
    // const response = await axios('https://dummyapi.io/data/api/user?limit=10', { headers: {'app-id': '5f66b69461c74cd0022cbdd7'}})
    const response = usersData.users;
    // res.send({ users: response.data })
    res.send({ users: response })
  } catch (error) {
    res.status(400).send(error.message || 'Something went wrong');  
  }
});

app.get('/api/users/:userId', async (req, res) => {
  const { userId } = req.params;
  console.log('RESPONSE FROM USER SERVICE - User Details')
  try {
    const response = await axios(`https://dummyapi.io/data/api/user/${userId}`, { headers: {'app-id': '5f66b69461c74cd0022cbdd7'}});
    res.send({ user: response.data });
  } catch (error) {
    res.status(400).send(error.message || 'Something went wrong');  
  }
})


app.get('/api/users/:userId/post', async (req, res) => {
  const { userId } = req.params;
  console.log('RESPONSE FROM USER SERVICE - User\'s Posts')
  try {
    const response = await axios.get(`https://dummyapi.io/data/api/user/${userId}/post`, {  headers: {'app-id': '5f66b69461c74cd0022cbdd7'} })
    res.send({ posts: response.data });
  } catch (error) {
    res.status(400).send(error.message || 'Something went wrong');  
  }
})


app.listen(3002, () => console.log('Listening on port 3002'))