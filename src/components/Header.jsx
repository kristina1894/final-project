import React from "react"
import { Link, Outlet } from "react-router-dom"
import "./App.css"
import { useTheme } from "./Hook/UseTheme"
import { Button } from "@mantine/core"

const Header = () => {
  const [theme, toggleTheme] = useTheme()
  return (
    <div className={`header ${theme}`}>
      <div id="logo">News App</div>
      <div id="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/lifestyle">Lifestyle</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/sport">Sport</Link>
        <Link to="/opinion">Politics</Link>
        <div className="button">
          <Button
            variant="subtle"
            color="dark"
            radius="xs"
            size="xs"
            compact
            onClick={toggleTheme}
          >
            Go {theme === "light" ? "Dark" : "Light"}
          </Button>
        </div>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}

export default Header
