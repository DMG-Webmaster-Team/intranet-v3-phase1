import React, { useContext, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Header from './Components/Header/Header'
import NavBar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Applications from './Pages/Applications/Applications'
import Announcements from './Pages/Announcements/Announcements'
import News from './Pages/News/News'
import Jobs from './Pages/Jobs/Jobs'
import Documents from './Pages/Documents/documents'
import Templates from './Pages/Templates/Templates'
import Default from './Pages/Default'
import Article from './Pages/News/Article'
import Login from './Pages/Login/Login'
import { IntranetContext } from './context'
import PrivateRoute from './Pages/PrivateRoute'

import DataWrapper from './Pages/DataWrapper'

const App = () => {
  const [isArabic, setIsArabic] = useState(false)

  const { getLang } = useContext(IntranetContext)

  useEffect(() => {
    setIsArabic(getLang())
  }, [])

  return (
    <>
      <PrivateRoute>
        <Header isArabic={isArabic} />
        <NavBar isArabic={isArabic} />
        {/* <DataWrapper> */}
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/applications' component={Applications} />

            <Route exact path='/announcements' component={Announcements} />
            <Route exact path='/news'>
              <News isArabic={isArabic} />
            </Route>

            <Route exact path='/jobs' component={Jobs} />
            <Route exact path='/documents' component={Documents} />
            <Route exact path='/templates' component={Templates} />
            <Route exact path='/news/:id' component={Article} />

            <Route component={Default} />
          </Switch>
        </div>
        {/* </DataWrapper> */}
        <Footer />
      </PrivateRoute>
      <Route exact path='/login' component={Login} />
    </>
  )
}
export default App
