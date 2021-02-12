import { usersAPI } from "../api/api"

const SET_USERS = "SET_USERS"
const ADD_USERS = "ADD_USERS"
const SET_TOTAL_PAGES_COUNT = "SET_TOTAL_PAGES_COUNT"

const initialState = {
    users: [],
    total_pages_count: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state, users: action.users
                // ...state, users: action.users.sort((a, b) => {
                //     return b.registration_timestamp - a.registration_timestamp
                // })
            }

        case ADD_USERS:
            return {
                ...state, users: [...state.users.concat(action.users)]
                // ...state, users: [...state.users
                //     .concat(action.users)
                //     .sort((a, b) => b.registration_timestamp - a.registration_timestamp)]
            }

        case SET_TOTAL_PAGES_COUNT:
            return { ...state, total_pages_count: action.num }

        default:
            return state
    }
}

export const setUsers = (users) => {
    return { type: SET_USERS, users }
}
export const addUsers = (users) => {
    return { type: ADD_USERS, users }
}
export const setTotalPagesCount = (num) => {
    return { type: SET_TOTAL_PAGES_COUNT, num }
}

export const getUsers = (pageNum) => {
    return async dispatch => {
        try {
            const res = await usersAPI.getUsers(pageNum)
            if (res.ok) {
                const data = await res.json()
                pageNum
                    ? dispatch(addUsers(data.users))
                    : dispatch(setUsers(data.users))
                dispatch(setTotalPagesCount(data.total_pages))
            }
            else {
                console.error(res.statusText)
            }
        } catch (err) {
            console.error(err)
        }
    }
}

export default usersReducer