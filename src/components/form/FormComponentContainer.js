import React, { useState } from "react"
import FormComponent from "./FormComponent"
import { saveUser } from '../../redux/formReducer'
import { connect } from "react-redux"
import ModalPage from "../ModalPage"


const FormComponentContainer = ({ saveUser, token, positions }) => {

    const [modal, setModal] = useState(false)

    const onSubmitFunc = async (values, resetFunc) => {

        let data = new FormData()
        data.append("name", values.name)
        data.append("email", values.email)
        data.append("phone", values.phone)
        data.append("position_id", values.picked)
        data.append("photo", values.photo[0])

        const res = await saveUser(data, token)
        if (res.isSuccess) {
            setModal(res)
            resetFunc(res)
        } else {
            setModal(res)
        }
    }

    return (
        <div>
            <ModalPage
                modal={modal}
                setModal={setModal} />
            <FormComponent
                positions={positions}
                onSubmitFunc={onSubmitFunc} />
        </div>
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
})(FormComponentContainer)