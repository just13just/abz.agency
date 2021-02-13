import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from '../redux/formReducer'


// function validatePosition(value) {
//     let error
//     if (!value) {
//         error = 'error user name'
//     }
//     return error
// }

function validateUsername(value) {
    let error
    if (value.length < 2 || value.length > 60) {
        error = 'error user name'
    }
    return error
}

function validateEmail(value) {
    let error
    if (!value) {
        error = 'Required'
    } else if (!/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(value)) {
        error = 'Invalid email address'
    }
    return error
}

function validatePhone(value) {
    let error
    if (!value) {
        error = 'Required'
    } else if (!/^[\+]{0,1}380([0-9]{9})$/i.test(value)) {
        error = 'Invalid phone number'
    }
    return error
}

const FormComponent = () => {

    const token = useSelector(state => state.formPage.token)
    const positions = useSelector(state => state.formPage.positions)
    const dispatch = useDispatch()


    const onSubmit = async (val, token) => {
        dispatch(saveUser(val, token))          // mapDispatchToProps ??
    }

    const positionsItems = positions.map(item => {
        return <div key={item.id}>
            <label>
                <Field type="radio" name="picked" value={`${item.id}`} />
                {item.name}
            </label>
        </div>
    })

    return (
        <div>
            <div className='title'>
                Register to get a work
            </div>
            <div className='second-row'>
                Attention! After successful registration and alert, <br />
                update the list of users in the block from the top
            </div>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    picked: '',
                    photo: ''
                }}
                onSubmit={onSubmit}
            >
                {({ setFieldValue, errors, touched }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Your name</label>
                            <Field
                                name="name"
                                validate={validateUsername}
                                placeholder='Your name' />
                            {errors.username && touched.username && <div>{errors.username}</div>}
                        </div>

                        <div>
                            <label htmlFor="email">Your email</label>
                            <Field
                                name="email"
                                validate={validateEmail}
                                placeholder='Your email' />
                            {errors.email && touched.email && <div>{errors.email}</div>}

                        </div>

                        <div>
                            <label htmlFor="phone">Phone number</label>
                            <Field
                                name="phone"
                                validate={validatePhone}
                                placeholder='+380 XX XXX XX XX' />
                            {errors.phone && touched.phone && <div>{errors.phone}</div>}
                        </div>

                        <div className='radio-group'>
                            <div id="my-radio-group">Select your position</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                {positionsItems}
                            </div>
                        </div>

                        <div>
                            <Field
                                type="file"
                                name="file"
                                onChange={(event) => {
                                    setFieldValue("photo", event.target.files[0]);
                                }}
                            />
                        </div>

                        <div className='button-wrap'>
                            <Button type="submit" className='btn' color="danger">
                                <span className='text'>Sign up now</span>
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormComponent