import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from "../../util/validators"


const FormComponent = ({ onSubmitFunc, positions }) => {

    const { register, handleSubmit, errors, reset, watch } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            picked: `${1}`,
            photo: undefined
        }
    })

    const onSubmit = val => onSubmitFunc(val, reset)

    const watchPhotoName = watch('photo', false)

    const positionsItems = positions.map((item, index) => {
        return (
            <div className='form-check form__position_height' key={item.id}>
                <input
                    className='form-check-input'
                    id={index.toString()}
                    type='radio'
                    name='picked'
                    value={item.id}
                    ref={register} />
                <label
                    className='form-check-label'
                    htmlFor={index.toString()}>{item.name}</label>
            </div>
        )
    })

    return (
        <section className='form-wrapper content-container' id='formComponent'>
            <div>
                <div className='form-wrapper__text'>
                    <div className='title'>
                        Register to get a work
                </div>
                    <div className='form-description'>
                        Attention! After successful registration and alert, update the<br />
                        list of users in the block from the top
                </div>
                </div>


                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='form'>
                        <div className='form__name'>
                            <label
                                className='form-label'
                                htmlFor="name">Name</label>
                            <input
                                className='form-control'
                                ref={register}
                                type='text'
                                name='name'
                                placeholder='Your name' />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>

                        <div className='form__email'>
                            <label
                                className='form-label'
                                htmlFor='email'>Email</label>
                            <input
                                className='form-control'
                                ref={register}
                                type='email'
                                name='email'
                                placeholder='Your email' />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>

                        <div className='form__phone'>
                            <label
                                className='form-label'
                                htmlFor="phone">Phone number</label>
                            <input
                                className='form-control'
                                ref={register}
                                type='tel'
                                name='phone'
                                placeholder='+380 XX XXX XX XX'
                                a11e='phoneHelp' />
                            {errors.phone && <div>{errors.phone.message}</div>}
                            <div
                                className='form__text'
                                id='phoneHelp'>Enter a phone number in international format</div>
                        </div>

                        <div className='form__position'>
                            <label>Select your position</label>
                            {positionsItems}
                        </div>

                        <div className='form__photo'>
                            <label className='form-label'>Photo</label>
                            <div className='custom-file'>
                                <input
                                    className='custom-file-input form-control'
                                    id='inputGroupFile'
                                    ref={register}
                                    type='file'
                                    name='photo' />
                                <label
                                    className='custom-file-label'
                                    htmlFor='inputGroupFile'>
                                    {watchPhotoName[0]
                                        ? watchPhotoName[0].name
                                        : 'Upload your photo'}</label>
                                {errors.photo && <p>{errors.photo.message}</p>}
                            </div>
                        </div>

                        <div className='form__button-wrap'>
                            <button className='btn-sing-up btn btn-danger btn-reset' type='submit'>
                                <span className='btn-sing-up__text'>Sign up now</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FormComponent;
