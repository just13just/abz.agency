import { Button } from 'reactstrap';
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
                        <li><Button color="link" className='menu__link'>About me</Button></li>
                        <li><Button color="link" className='menu__link'>Relationships</Button></li>
                        <li><Button color="link" className='menu__link'>Requirements</Button></li>
                        <li><Button color="link" className='menu__link'>Users</Button></li>
                        <li><Button color="link" className='menu__link'><Link to="formComponent" spy={true} smooth={true}>Sign up</Link></Button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header