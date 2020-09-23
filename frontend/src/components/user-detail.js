import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, Icon, Item, Label } from 'semantic-ui-react';

// import userDetails from '../mockdata/userDetail.json'
import userPost from '../mockdata/userPost.json'


const UserDetail = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();


  useEffect(() => {
    getUserDetails(userId);
    fetchUserPosts(userId);
  }, [])

  const getUserDetails = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchUserPosts = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}/post`);
      const json = await response.json();
      setPosts(json.posts.data);
    } catch (error) {
      console.error(error); 
    }
  }
  

  
  if (!Object.keys(user).length) return null;
  return (
    <Grid>
      <Grid.Column width={4}>
        <Card
          className="user-detail-card"
          image={user.picture}
          header={`${user.firstName} ${user.lastName}`}
          meta={user.phone}
          description={user.email}
        />
      </Grid.Column>
      <Grid.Column width={12}>
        <Item.Group>
          {Boolean(posts.length) && posts.map(post => (
            <Item key={post.id} className="post">
              <Item.Image size='tiny' circular src={post.image} />

              <Item.Content>
                <Item.Header as='a'>{post.text}</Item.Header>
                <Item.Description>
                  {post.tags.map(tag => <Label key={tag} size='small' color='teal'>{tag}</Label>)}
                  
                </Item.Description>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Grid.Column>
    </Grid>
  )
}


export default UserDetail;