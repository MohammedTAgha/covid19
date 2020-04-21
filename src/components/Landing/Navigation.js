import React from 'react'
import {Link} from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div className="nav-bar">
        <div className="logo">
            COVID-19
            {/* <img className="small-virus" src={logo} />
              */}
        </div>
        <ul>                                                           
            <Link to="/">
            <li><a href="#" style={{color:'#400496'}}>Home</a></li>
            </Link>
            <Link to="/meaters" >
            <li><a>Meaters</a></li>
            </Link>     
            <li><a>About</a></li>
        </ul>
    </div>
     );
}
 
export default Navigation;