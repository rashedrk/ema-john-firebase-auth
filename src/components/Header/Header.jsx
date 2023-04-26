import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then(()=>{})
        .catch(err => console.log(err.message))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
            {
                user && 
                <div>
                    <span>{user.email}</span> <button onClick={handleSignOut}>sign Out</button>
                </div>
            }
        </nav>
    );
};

export default Header;