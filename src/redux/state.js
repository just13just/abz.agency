import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import usersReducer from './usersReducer'

const store = createStore(usersReducer, applyMiddleware(thunkMiddleware))

export default store
