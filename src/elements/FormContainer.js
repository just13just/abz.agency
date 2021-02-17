import React from "react"
import UserForm from "./UserForm"
import { saveUser } from '../redux/formReducer'
import { connect } from "react-redux"


const FormContainer = ({ saveUser, token, positions }) => {

    const onSubmitFunc = async values => {

        let data = new FormData()
        data.append("name", values.name)
        data.append("email", values.email)
        data.append("phone", values.phone)
        data.append("position_id", values.picked)
        data.append("photo", values.photo[0])

        const res = await saveUser(data, token)
        if (res.isSuccess) {
            console.log('success')
            // showModalPage('You have successfully passed the registration')
        } else {
            console.log('reject')
            // showModalPage(res.message)
        }
    }

    return (
        <UserForm
            positions={positions}
            onSubmitFunc={onSubmitFunc}
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