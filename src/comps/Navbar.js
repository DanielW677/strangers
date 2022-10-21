import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navBar">
            <Link to='/' className="link">Home</Link>
            <Link to='posts' className="link">Posts</Link>
            <Link to='profile' className="link">Profile</Link>
            <Link to='login' className="link">Login</Link>
            <Link to='register' className="link">Register</Link>
        </nav>
    )
}

export default Navbar;