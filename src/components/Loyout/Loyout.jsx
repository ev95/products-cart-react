import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Loyout = ({cart}) => {
  return (
    <div>
        <Header cart={cart}/>
        <Outlet />
    </div>
  )
}

export default Loyout