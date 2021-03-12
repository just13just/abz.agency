import React, { useEffect, useState } from "react"
import logo from "./assets/logo.svg";
import { Link } from 'react-scroll';
import { blockScroll } from "../../util/screenHelper";

const Header = () => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        blockScroll(open)
    }, [open])

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
                    <div className='header__menu-container'>
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
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header