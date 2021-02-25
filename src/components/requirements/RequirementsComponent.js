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
                            <div className={style.text__article}>
                                We will evaluate how clean your approach to writing CSS and Javascript code is.
                                You can use any CSS and Javascript 3rd party libraries without any restriction.
                            </div>
                            <div className={style.text__article}>
                                If 3rd party css/javascript libraries are added to the project via bower/npm/yarn
                                you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well.
                                Slice service directory page PSD mockup into HTML5/CSS3.
                            </div>
                            <div className={style.text__btn}><Link to="formComponent" spy={true} smooth={true}>Sing up now</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequirementsComponent