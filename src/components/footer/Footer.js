import React from "react"
import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={`${style.footer} container`}>
            <div className={style.footer__text}>
                © lorem. ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </footer>
    )
}

export default Footer