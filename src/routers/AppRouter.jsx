import React from 'react'
import { BrowserRouter as Router,
    Route,
    Routes
     } from "react-router-dom"
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Routes>
                <Route exact path='/login' Component={LoginScreen}/>
                <Route exact path='/' Component={CalendarScreen}/>

                
                
            </Routes>
           
    </div>
    </Router>
  )
}
