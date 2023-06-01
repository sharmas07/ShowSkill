import {React, useState} from 'react'
import '../styles/SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    // form state variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("student");
    const [showPassword, setShowPassword] = useState(false);
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleUserTypeChange = (e) => {
      setUserType(e.target.value);
    };
  
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here TODO
      console.log({
        username,
        email,
        userType,
        password
      });
    };   
  
    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
          <input type="text" name='username' value={username} onChange={handleUsernameChange} placeholder='username'/>
       
          <input type="email" value={email} onChange={handleEmailChange} placeholder='Email'/>
       
       <div className="password__container">
       <input type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} placeholder='password'/>
          <span className='show__password__btn' onClick={handleShowPassword}>{showPassword ? "Hide" : "Show"}</span>
       
       </div>
         
        <div className="user__type__container">
       
          <label> 
            <input type="radio" value="student" checked={userType === "student"} onChange={handleUserTypeChange} />
            Student
          </label>
          <label>
            <input type="radio" value="recruiter" checked={userType === "recruiter"} onChange={handleUserTypeChange} />
            Recruiter
          </label>
        
        </div>
        <p>already have an account? <Link to='/signin'>sign in</Link></p>
        <button className='submit__btn' type="submit">Sign Up</button>
      </form>
    );
}
export default SignUp