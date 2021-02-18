import React from "react"
import banner from "./../assets/banner-photo.jpg";
import { Button } from 'reactstrap';
import { Link } from "react-scroll";

const FirstBlock = () => {

    return (
        <div className='firstBlock'>
            <div className='bannerWrap'>
                <img src={banner} />
            </div>
            <div className='content contentContainer'>
                <div className='title'>TEST ASSIGNMENT FOR FRONTEND DEVELOPER POSITION</div>
                <div className='text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus tempus ligula eu ornare. Aliquam venenatis magna justo, ut fringilla justo gravida imperdiet. Nullam et enim faucibus, scelerisque nulla placerat, egestas velit. Nullam et ex dapibus eros scelerisque ultricies. Nunc nisi sem, convallis a tristique in, scelerisque et erat.</div>
                <Button className='btn' color="danger">
                    <Link to="formComponent" spy={true} smooth={true}>Sign up now</Link>
                </Button>
            </div>
        </div>
    )
}

export default FirstBlock