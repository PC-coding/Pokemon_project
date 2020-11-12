import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({}) => {
    return(
        <nav>
            <Link style={{color:"white", padding: 20, textDecoration: 'none', fontWeight:'bold'}} to="/lookup">Lookup</Link>
            <Link style={{color:"white", padding: 20, textDecoration: 'none', fontWeight:'bold'}} to="/view">View</Link>
        </nav>
    )
}

export default NavBar;