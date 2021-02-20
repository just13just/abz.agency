import React from "react"
import { Link } from "react-scroll"
import style from './Requirements.module.scss'
import manLaptop from "./assets/man-laptop-v1.svg"

const RequirementsComponent = () => {

    return (
        <div className={`${style.requirements} container`}>
            <div>
                <div className={style.requirements__title}>
                    Let get acquainted
                </div>
                <div className={style.requirements__contentContainer}>
                    <div className={style.content}>
                        <div className={style.content__imgContainer}>
                            <img src={manLaptop} />
                        </div>
                        <div className={`${style.content__text} ${style.text}`}>
                            <div className={style.text__title}>I am cool frontend developer</div>
                            <div className={style.text__article}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur, lacus ut blandit pellentesque, justo tellus varius neque.</div>
                            <div className={style.text__article}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur, lacus ut blandit pellentesque, justo tellus varius neque, non pellentesque quam metus et tellus. Praesent consectetur, lacus ut blandit pellentesque dolor sit amet, consectetur adipiscing elit.</div>
                            <div className={style.text__btn}><Link to="formComponent" spy={true} smooth={true}>Sing up now</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequirementsComponent