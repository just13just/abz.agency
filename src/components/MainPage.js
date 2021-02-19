import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../redux/usersReducer'
import { getPositions, getToken } from '../redux/formReducer'
import Header from './Header'
import AboutMeComponent from './AboutMeComponent'
import RequirementsComponent from './RequirementsComponent'
import UsersComponentContainer from './UsersComponentContainer'
import FormComponentContainer from './FormComponentContainer'
import Footer from './Footer'


const MainPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getToken())
        dispatch(getPositions())
    }, [])

    return (
        <div className='main-container'>
            <div className='container'>
                <Header />
                <AboutMeComponent />
                <RequirementsComponent />
                <UsersComponentContainer />
                <FormComponentContainer />
                <Footer />
            </div>
        </div>
    )
}

export default MainPage