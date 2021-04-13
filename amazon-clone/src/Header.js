import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='https://www.amazon.in/ref=nav_logo'></img>
            
            <div className="header__search">
                <input className='header__searchInput' type="text">
                {/* LOGO */}
                </input>
            </div>

        </div>
    )
}

export default Header
