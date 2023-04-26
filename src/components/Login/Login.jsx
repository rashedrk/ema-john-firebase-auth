import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // password show toggle 
    const [show, setShow] = useState(false);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={!show ? "password" : "text"} name="password" required id="" />
                    <p onClick={() => setShow(!show)}>
                        {
                            show ? 'hide password' : 'show password'
                        }
                    </p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='text-center'>New to Ema-john? <Link className='color-primary' to='/signup'>Create New Account</Link></p>
        </div>
    );
};

export default Login;