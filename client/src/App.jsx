import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import StudentProfileView from './features/student/StudentProfileView'

function App() {
  const [authToken, setAuthToken] = useState(false);
  return (
    <>
   
     <div className="main__container">
     <div className="app__container">
        <Navbar authToken={authToken} setAuthToken={setAuthToken}/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/userprofile' element={<StudentProfileView />} />
        </Routes>
       
        <Footer />
      </div>
     </div> 
    </>
  )
}

export default App
