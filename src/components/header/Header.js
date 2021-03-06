import React from "react"
import logo from "./assets/logo.svg";
import { Link } from 'react-scroll';

const Header = () => {

    return (
        <header className='header'>
            <div className='header__container content-container'>
                <div className='header__logo'>
                    <Link to="formComponent" spy={true} smooth={true}><img src={logo} /></Link>
                </div>

                <nav className='menu__body'>
                    <ul className='menu__list'>
                        <li><button className='menu__link btn'>About me</button></li>
                        <li><button className='menu__link btn'>Relationships</button></li>
                        <li><button className='menu__link btn'>Requirements</button></li>
                        <li><button className='menu__link btn'>Users</button></li>
                        <li>
                            <button color="link" className='menu__link btn'>
                                <Link to="formComponent" spy={true} smooth={true}>Sign up</Link>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header