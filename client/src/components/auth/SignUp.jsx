import {React, useState} from 'react'
import { Link } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../redux/reducers/signUpReducer';

const SignUp = () => {
    // form state variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.login.loading);
    const error = useSelector((state) => state.login.error);

    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
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
      const credentials = {
        username,
        password,
        email
      }
      // Handle form submission here TODO
      dispatch(signup(credentials))
      console.log({
        username,
        email,
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

        <p>already have an account? <Link to='/signin'>sign in</Link></p>
        <button className='submit__btn' type="submit">Sign Up</button>
      </form>
    );
}
export default SignUp