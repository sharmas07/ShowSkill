import {React, useState} from 'react'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/reducers/loginReducer';

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.login.loading);
    const error = useSelector((state) => state.login.error);

    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
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
        password
      }
      console.log(credentials)
      // call redux here
      dispatch(login(credentials))
    };   
  
    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
       
          <input type="username" value={username} onChange={handleUsernameChange} placeholder='Username'/>
       
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