import React from "react"
import { Link } from "react-scroll";

const AboutMeComponent = () => {

    return (
        <section className='about-me'>
            <div className='about-me__bg content-container'>
                <div className='about-me__container'>
                    <div>
                        <div className='about-me__title'>Test assignment for frontend developer position</div>
                        <div className='about-me__description'>
                            We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.
                            <div className='about-me__description_hide'>
                                Please be patient, we consider and respond to every application that meets minimum requirements.
                                We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens</div>
                        </div>
                        <div className='about-me__button-wrap'>
                            <button className='btn-sing-up btn-danger btn btn-reset'>
                                <Link to="formComponent" spy={true} smooth={true}><span className='btn-sing-up__text'>Sing up now</span></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeComponent