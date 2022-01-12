import React from 'react'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import AboutPages from './pages/AboutPages'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/shared/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {

  return (
    <>
    <FeedbackProvider>
    <Router>
     <Header  />
     <div className = "container">
     <Routes>
       <Route exact path='/' element={<>
        < FeedbackForm  />
       < FeedbackStats  />
     <FeedbackList  />
       </>}/>
     
   
   
   
     <Route path = '/about' element={<AboutPages />} />
   
     </Routes>
     <AboutIconLink />
   
     </div>
    
     
     </Router>

     </FeedbackProvider>
    </>
  )
}

export default App
