import React from "react"
import { Link } from "react-scroll"
import manLaptop from "./assets/man-laptop-v1.svg"

const RequirementsComponent = () => {

    return (
        <section className='requirements content-container'>
            <div className='title requirements__title'>Let's get acquainted</div>
            <div className='requirements__content-container'>
                <div className='requirements__first-column'>
                    <div className='requirements__img-container'>
                        <img className='requirements__img-container_img-size' src={manLaptop} />
                    </div>
                </div>
                <div className='requirements__second-column text'>
                    <div className='text__description'>I am cool frontend developer</div>
                    <div className='text__article'>
                        We will     evaluate how clean your approach to writing CSS and Javascript code is.
                            You can use any CSS and Javascript 3rd party libraries without any restriction.</div>
                    <div className='text__article'>
                        If 3rd party css/javascript libraries are added to the project via bower/npm/yarn
                        you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well.
                            Slice service directory page PSD mockup into HTML5/CSS3.</div>
                    <div className='text__btn'><Link to="formComponent" spy={true} smooth={true}>Sing up now</Link></div>
                </div>
            </div>
        </section>
    )
}

export default RequirementsComponent