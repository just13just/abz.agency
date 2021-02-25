import React from "react"
import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={`${style.footer} container`}>
            <div className={style.footer__text}>
                © abz.agency specially for the test task 
            </div>
        </footer>
    )
}

export default Footer