import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import { useLocation, Link } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation();
  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={location.pathname === "/"}
      >
        <Link to="/">Users</Link>
      </Menu.Item>
      <Menu.Item
        name='messages'
        active={location.pathname === "/posts"}
      >
        <Link to="/posts">Posts</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navigation;