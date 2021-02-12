import React from "react"
import { Button } from "reactstrap"


const FourthBlock = () => {
    return (
        <div className='fourthBlock'>
            <div className='contentContainer'>
                <div className='title'>
                    Lorem ipsum dolor sit
                </div>
                <div className='second-row'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Morbi faucibus tempus ligula eu ornare.
                </div>
                <div className='form-wrap'>

                </div>
                <div className='button-wrap'>
                    <Button className='btn' color="danger">
                        <span className='text'>
                            Sign up now
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FourthBlock