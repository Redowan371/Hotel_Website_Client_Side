import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import buttonIcon from '../../images/search.png';
import './Login.css';

const Login = () => {
    const { signInWithGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                
                history.push(redirect_uri)
            }
            )
            .catch(err => console.log(err))
    }
    return (
        <div className='login-area'>
            <div className="title text-center title-text">
                <h1>Please <span>Login</span> Here</h1>
           </div>
            <div className='login-btn'>
                <button className='footer-btn' onClick={handleGoogleLogIn}> <img className='btn-img' src={buttonIcon} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;