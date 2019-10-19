import React, { Component } from 'react'
import Search from './Search'
import Navbar from './Navbar'
// import UserInfo from './UserInfo'
const HeaderRight = () => {
  return (
    <div className="header-right">
      <Search />
      {/* <UserInfo /> */}
      <Navbar />
    </div>
  )
}

export default HeaderRight
