import React from 'react'
import { MantineProvider, Text, NavLink } from '@mantine/core'

function Header() {
    return (
        <div className='header'>
            <div id='logo'>News App</div>
            <div id='nav-links'>
                <NavLink label="Home"></NavLink>
                <NavLink label="Entertainment"></NavLink>
                <NavLink label="Lifestyle"></NavLink>
                <NavLink label="Politics"></NavLink>
                <NavLink label="Sport"></NavLink>
            </div>

        </div>
    )
}

export default Header
