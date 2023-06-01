import {React, useState} from 'react'
import '../styles/SignUp.css'
import { Link } from 'react-router-dom';

const SignIn = () => {
    // form state variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here TODO
      console.log({
        email,
        password
      });
    };   
  
    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
       
          <input type="email" value={email} onChange={handleEmailChange} placeholder='Email'/>
       
       <div className="password__container">
       <input type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} placeholder='password'/>
          <span className='show__password__btn' onClick={handleShowPassword}>{showPassword ? "Hide" : "Show"}</span>
       
       </div>
         
        <p>Don't have an account? <Link to='/signup'>sign Up</Link></p>
        <button className='submit__btn' type="submit">Sign In</button>
      </form>
    );
}
export default SignIn