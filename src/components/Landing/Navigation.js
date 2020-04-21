import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../img/logo.png';
const Navigation = () => {
    return ( 
        <div className="nav-bar" style={{position:'sticky',top:0}}>
        <div className="logo">
           
            <img  src={logo} />
              
        </div>
        <ul>                                                           
            <Link to="/">
            <li><a href="/" style={{color:'#400496'}}>Home</a></li>
            </Link>
            <Link to="/meaters" >
            <li><a  href="/meaters">Meaters</a></li>
            </Link>     
            <li><a href="/">About</a></li>
        </ul>
    </div>
     );
}
 
export default Navigation;