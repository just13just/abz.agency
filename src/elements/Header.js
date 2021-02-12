import { Button } from 'reactstrap';
import React from "react"
import favicon from "./../assets/favicon-32x32.png";

const Header = () => {

    return (
        <div className='header contentContainer'>
            <div>
                <a href="#"><img src={favicon}></img> TESTTASK</a>
            </div>

            <div>
                <Button color="link">About me</Button>
                <Button color="link">Relationships</Button>
                <Button color="link">Requirements</Button>
                <Button color="link">Users</Button>
                <Button color="link">Sign up</Button>
            </div>
        </div>
    )
}

export default Header