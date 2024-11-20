import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css'
const Home = () => {
  return (
    <div className="home-container">
    <div className="content">
      <h1>Welcome to User Management</h1>
      <p>Effortlessly manage and explore user profiles. Click below to view the user details.</p>
      <Link to="/displayUsers">
        <button className="btn-primary">See Users</button>
      </Link>
    </div>
  </div>
  )
}

export default Home;
