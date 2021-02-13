import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import formReducer from './formReducer'
import usersReducer from './usersReducer'

const reducers = combineReducers({
    usersPage: usersReducer,
    formPage: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
