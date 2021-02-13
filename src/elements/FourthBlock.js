import React from "react"
import { Button } from "reactstrap"
import FormContainer from "./FormContainer"


const FourthBlock = () => {
    return (
        <div className='fourthBlock'>
            <div className='contentContainer'>
                <div className='title'>
                    Register to get a work
                </div>
                <div className='second-row'>
                    Attention! After successful registration and alert, <br />
                    update the list of users in the block from the top
                </div>
                <div className='form-wrap'>
                    <FormContainer />
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