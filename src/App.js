import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AboutMeComponent from './components/aboutMe/AboutMeComponent'
import Footer from './components/footer/Footer'
import FormComponentContainer from './components/form/FormComponentContainer'
import Header from './components/header/Header'
import RequirementsComponent from './components/requirements/RequirementsComponent'
import UsersComponentContainer from './components/users/UsersComponentContainer'
import { getPositions, getToken } from './redux/formReducer'
import { getUsers } from './redux/usersReducer'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getToken())
    dispatch(getPositions())
  }, [])

  return (
    <div className="site-container">
      <div className='main-container'>
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

export default App
