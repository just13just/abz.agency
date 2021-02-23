import { Button } from 'reactstrap';
import React from "react"
import style from './Header.module.scss'
import logo from "./assets/logo.svg";
import { Link } from 'react-scroll';

const Header = () => {

    return (
        <header className={`${style.header} container`}>
            <div className={style.header__container}>
                <div className={style.header__logo}>
                    <Link to="formComponent" spy={true} smooth={true}><img src={logo} /></Link>
                </div>

                <nav className={style.menu__body}>
                    <ul className={style.menu__list}>
                        <li><Button color="link" className={style.menu__link}>About me</Button></li>
                        <li><Button color="link" className={style.menu__link}>Relationships</Button></li>
                        <li><Button color="link" className={style.menu__link}>Requirements</Button></li>
                        <li><Button color="link" className={style.menu__link}>Users</Button></li>
                        <li><Button color="link" className={style.menu__link}><Link to="formComponent" spy={true} smooth={true}>Sign up</Link></Button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header