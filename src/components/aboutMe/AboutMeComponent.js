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
                        <div className={style.content__title}>TEST ASSIGNMENT FOR FRONTEND DEVELOPER POSITION</div>
                        <div className={style.content__text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus tempus ligula eu ornare. Aliquam venenatis magna justo, ut fringilla justo gravida imperdiet. Nullam et enim faucibus, scelerisque nulla placerat, egestas velit. Nullam et ex dapibus eros scelerisque ultricies. Nunc nisi sem, convallis a tristique in, scelerisque et erat.</div>
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