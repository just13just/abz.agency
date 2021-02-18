import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../redux/usersReducer'
import { getPositions, getToken } from '../redux/formReducer'
import Header from './Header'
import FirstBlock from './FirstBlock'
import SecondBlock from './SecondBlock'
import ThirdBlockContainer from './ThirdBlockContainer'
import FourthBlock from './FourthBlock'
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
                <FirstBlock />
                <SecondBlock />
                <ThirdBlockContainer />
                <FourthBlock />
                <Footer />
            </div>
        </div>
    )
}

export default MainPage