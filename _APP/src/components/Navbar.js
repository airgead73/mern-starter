import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link to="/">Home</Link></li>
        <li className="nav__item"><Link to="/login">Login</Link></li>
        <li className="nav__item"><Link to="/create">Add Project</Link></li>
      </ul>
    </nav>
   );
}
 
export default Navbar;