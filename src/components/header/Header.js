import React, { useState } from "react"
import logo from "./assets/logo.svg";
import { Link } from 'react-scroll';

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <header className='header'>
            <div className='header__body content-container'>
                <Link className='header__logo' to="formComponent" spy={true} smooth={true}>
                    <img src={logo} alt='logo..' />
                </Link>

                <div
                    className={`header__burger ${open ? 'active' : ''}`}
                    onClick={() => setOpen(!open)}>
                    <span></span>
                </div>
                <nav className={`header__menu ${open ? 'active' : ''}`}>
                    <ul className='header__list'>
                        <li><a href='#' className='header__link'>About me</a></li>
                        <li><a href='#' className='header__link'>Relationships</a></li>
                        <li><a href='#' className='header__link'>Requirements</a></li>
                        <li><a href='#' className='header__link'>Users</a></li>
                        <li>
                            <Link
                                className='header__link'
                                to="formComponent"
                                spy={true}
                                smooth={true}>Sign up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header