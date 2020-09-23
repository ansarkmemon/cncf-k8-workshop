import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const UserCard = ({ user }) => (
  <Card href={`/user/${user.id}`}>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src={user.picture}
      />
      <Card.Header>{`${user.firstName} ${user.lastName}`}</Card.Header>
      <Card.Description>
        {user.email}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default UserCard;