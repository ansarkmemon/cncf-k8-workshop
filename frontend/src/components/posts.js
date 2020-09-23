import React, { useState, useEffect } from 'react'
import { Grid, Item, Label, Loader } from 'semantic-ui-react';
  


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const json = await response.json();
      setPosts(json.posts.data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!posts.length) return <Loader active inline='centered' />
  return (
    <Grid>
      <Grid.Column width={2} />
      <Grid.Column width={12}>
        <Item.Group>
          { posts.map(post => (
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
      <Grid.Column width={2} />
    </Grid>
    
  )
}

export default Posts;