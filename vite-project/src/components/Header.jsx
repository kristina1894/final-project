import React from "react"
import { Link, Outlet } from "react-router-dom"
import "./App.css"

const Header = () => {
  return (
    <div className="header">
      <div id="logo">News App</div>
      <div id="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/lifestyle">Lifestyle</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/sport">Sport</Link>
        <Link to="/opinion">Politics</Link>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}

export default Header
