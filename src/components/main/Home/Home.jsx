import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
      <h1>Home Page</h1>
      <nav>
        
        <Link className='link' to="/ToDo">ToDo</Link>
        <Link className='link' to="/Calculator">Calculator</Link>
        <Link className='link' to="/Weather">Weather</Link>
        <Link className='link' to="/Game">Game</Link>

      </nav>
        </div>
  );
};

export default Home;
