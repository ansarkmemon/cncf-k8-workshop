import React, { useState, useEffect } from 'react';
import { Card, Loader } from 'semantic-ui-react';
import UserCard from './user-card'

const Users = () =>  {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const json = await response.json();
      setUsers(json.users.data)
    } catch (error) {
      console.error(error); 
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  if (!users.length) return <Loader active inline='centered' />
  return (
    <Card.Group className="card-container h-center v-center">
      { users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </Card.Group>
  )
}





export default Users;
