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
                        <li>
                            <div className='header__link'>
                                <Link to='' spy={true} smooth={true}>About me</Link>
                            </div>
                        </li>
                        <li>
                            <div className='header__link'>
                                <Link to='' spy={true} smooth={true}>Relationships</Link>
                            </div>
                        </li>
                        <li>
                            <div className='header__link'>
                                <Link to='' spy={true} smooth={true}>Requirements</Link>
                            </div>
                        </li>
                        <li>
                            <div className='header__link'>
                                <Link to='' spy={true} smooth={true}>Users</Link>
                            </div>
                        </li>
                        <li>
                            <div className='header__link'>
                                <Link to='formComponent' spy={true} smooth={true}>Sign up</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header