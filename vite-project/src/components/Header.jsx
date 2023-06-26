import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div id='logo'>News App</div>
      <div id='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/lifestyle">Lifestyle</Link>
        <Link to="/sports">Sport</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/politics">Politics</Link>
       
      </div>
    </div>
  );
}

export default Header;
