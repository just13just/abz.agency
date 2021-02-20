import React from "react"
import { Link } from "react-scroll";
import manLaptop from "./../assets/man-laptop-v1.svg";

const RequirementsComponent = () => {

    return (
        <div className='secondBlock'>
            <div className='contentContainer'>
                <div className='title'>
                    Let get acquainted
                </div>
                <div className='content-row'>
                    <div className='img-container'>
                        <img src={manLaptop} />
                    </div>
                    <div className='text'>
                        <div className='first'>I am cool frontend developer</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur, lacus ut blandit pellentesque, justo tellus varius neque.</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur, lacus ut blandit pellentesque, justo tellus varius neque, non pellentesque quam metus et tellus.</div>
                        <div><Link to="formComponent" spy={true} smooth={true}>Sing up now</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequirementsComponent