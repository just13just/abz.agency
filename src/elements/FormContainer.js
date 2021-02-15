import React from "react"
import FormComponent from "./FormComponent"
import { saveUser } from '../redux/formReducer'
import { connect } from "react-redux"


const FormContainer = (props) => {

    const saveUser = (val) => {
        return props.saveUser(val, props.token)
    }

    return (
        <FormComponent
            positions={props.positions}
            saveUser={saveUser}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.formPage.token,
        positions: state.formPage.positions
    }
}

export default connect(mapStateToProps, {
    saveUser
})(FormContainer)