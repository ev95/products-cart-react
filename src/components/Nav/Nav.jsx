import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      < NavLink to='/'> Home </NavLink>
      < NavLink to='/products'> Porducts  </NavLink> 
    </nav>
  )
}

export default Nav