import React from "react"
import style from "./Form.module.scss";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from "../../util/validators"
import { Button } from "reactstrap"


const FormComponent = ({ onSubmitFunc, positions }) => {

    const { register, handleSubmit, errors, reset } = useForm({
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

    const positionsItems = positions.map((item) => {
        return <div key={item.id}>
            <label>
                <input type="radio" name="picked" value={item.id} ref={register} />
                {item.name}
            </label>
        </div>
    })

    return (
        <div className={`${style.wrapper} container`} id='formComponent'>

            <div className={style.text}>
                <div className={style.text__title}>
                    Register to get a work
                </div>
                <div className={style.text__description}>
                    Attention! After successful registration and alert, <br />
                    update the list of users in the block from the top
                </div>
            </div>


            <div className={style.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name">Your name</label>
                        <input
                            ref={register}
                            type="text"
                            name="name"
                            placeholder='Your name' />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email">Your email</label>
                        <input
                            ref={register}
                            type='email'
                            name="email"
                            placeholder='Your email' />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="phone">Phone number</label>
                        <input
                            ref={register}
                            type="tel"
                            name="phone"
                            placeholder='+380 XX XXX XX XX' />
                        {errors.phone && <div>{errors.phone.message}</div>}
                    </div>

                    <div className='radio-group'>
                        <div id="my-radio-group">Select your position</div>
                        <div role="group" aria-labelledby="my-radio-group">
                            {positionsItems}
                        </div>
                    </div>

                    <div>
                        <input
                            ref={register}
                            type="file"
                            name="photo" />
                        {errors.photo && <p>{errors.photo.message}</p>}
                    </div>

                    <div className='button-wrap'>
                        <Button type="submit" className='btn' color="danger">
                            <span className='text'>Sign up now</span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormComponent;