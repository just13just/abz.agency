import * as Yup from "yup"


const FILE_SIZE = 5000 * 1024
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
]

export const schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(60, 'Too Long!')
        .required('Required'),

    email: Yup.string()
        .required('Required')
        .max(100, 'To long email')
        .matches(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
            'Invalid email address'),

    phone: Yup.string()
        .required('Required')
        .matches(/^[\+]{0,1}380([0-9]{9})$/,
            'Invalid phone number'),

    photo: Yup.mixed()
        .required("You need to provide a picture")
        .test("size", "The file is too large", (value) => {
            return value && value[0].size <= FILE_SIZE
        })
        .test("type", "We only support jpg and jpeg", (value) => {
            return value && SUPPORTED_FORMATS.includes(value[0].type)
        }),
})