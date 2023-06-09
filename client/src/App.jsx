import { useState } from 'react'
import './App.css'
import Footer from './components/common/Footer'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
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
