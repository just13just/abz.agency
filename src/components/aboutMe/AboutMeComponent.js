import React from "react"
import style from './AboutMe.module.scss'
import { Button } from 'reactstrap';
import { Link } from "react-scroll";

const AboutMeComponent = () => {

    return (
        <div className={style.aboutMe}>
            <div className={`${style.aboutMe__bg} container`}>
                <div className={style.content}>
                    <div>
                        <div className={style.content__title}>Test assignment for frontend developer position</div>
                        <div className={style.content__text}>
                            We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.
                            Please be patient, we consider and repository to every application that meets minimum requirements.
                            We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens
                        </div>
                        <div className={style.content__button}>
                            <Button color="danger">
                                <Link to="formComponent" spy={true} smooth={true}>Sign up now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeComponent