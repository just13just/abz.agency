import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../redux/usersReducer'
import { getPositions, getToken } from '../redux/formReducer'
import Header from './header/Header'
import AboutMeComponent from './aboutMe/AboutMeComponent'
import RequirementsComponent from './requirements/RequirementsComponent'
import UsersComponentContainer from './users/UsersComponentContainer'
import FormComponentContainer from './form/FormComponentContainer'
import Footer from './footer/Footer'


const MainPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getToken())
        dispatch(getPositions())
    }, [])

    return (
        <div className='main-container'>
            <Header />
            <AboutMeComponent />
            <RequirementsComponent />
            <UsersComponentContainer />
            <FormComponentContainer />
            <Footer />
        </div>
    )
}

export default MainPage