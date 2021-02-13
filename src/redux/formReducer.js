import { formAPI } from "../api/api"

const SET_TOKEN = "SET_TOKEN"

const initialState = {
    token: ''
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state, token: action.token
            }

        default:
            return state
    }
}

export const setToken = (token) => {
    return { type: SET_TOKEN, token }
}

export const getToken = () => {
    return async dispatch => {
        try {
            const res = await formAPI.getToken()
            if (res.ok) {
                const data = await res.json()
                dispatch(setToken(data.token))
            }
            else {
                console.error(res.statusText)
            }
        } catch (err) {
            console.error(err)
        }
    }
}

export default formReducer