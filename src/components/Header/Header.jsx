import React from 'react'
import style from './Header.module.css'
import Nav from '../Nav/Nav'
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Header = ({cart}) => {
  return (
    <header>
      <div className={style.logo_block}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPdmTh-tiZ-yVqDET1zbusOoYrNne4YyR0A&s" />
      </div>
      <div className={style.nav_block}>
        <Nav />
      </div>
      <div className={style.icons_block}>
        <NavLink to='/cart'>
          <FaShoppingCart />
          <sup className={style.cartCount}>{cart.length}</sup>
        </NavLink>

        <FaUserAlt />
      </div>
    </header>
  )
}

export default Header