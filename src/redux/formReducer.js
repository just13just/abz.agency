import { formAPI } from "../api/api"
import { getUsers } from "./usersReducer"

const SET_TOKEN = "SET_TOKEN"
const SET_POSITIONS = "SET_POSITIONS"

const initialState = {
    token: '',
    positions: []
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state, token: action.token
            }

        case SET_POSITIONS:
            return {
                ...state, positions: action.positions
            }

        default:
            return state
    }
}

export const setToken = (token) => {
    return { type: SET_TOKEN, token }
}

export const setPositions = (positions) => {
    return { type: SET_POSITIONS, positions }
}

export const getToken = () => {
    return async dispatch => {
        try {
            const res = await formAPI.getToken()
            const data = await res.json()
            if (data.success) {
                dispatch(setToken(data.token))
            }
            else {
                console.error(data.message)
            }
        } catch (err) {
            console.error(err)
        }
    }
}

export const getPositions = () => {
    return async dispatch => {
        try {
            const res = await formAPI.getPositions()
            const data = await res.json()
            if (data.success) {
                dispatch(setPositions(data.positions))
            } else {
                console.error(data.message)
            }
        } catch (err) {
            console.error(err)
        }
    }
}

export const saveUser = (value, token) => {
    return async dispatch => {
        try {
            const res = await formAPI.saveUser(value, token)
            const data = await res.json()
            if (data.success) {
                dispatch(getUsers())
                // return true
            } else {
                console.error(data.message)
                // return false 
            }
        } catch (err) {
            console.error(err)
        }
    }
}

export default formReducer