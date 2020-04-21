import React,{useEffect, Component} from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery'
//import {styles} from './Landing.module.css';
import smallvirus from '../../img/smallvirus.svg';
import virus from '../../img/virus.svg';
//import logo from '../../img/logo.png';

import './stylse.css'



const Landing = () => {
    
    
    useEffect(()=>{
         $('container').addClass('stop-scrolling')
       // window.onscroll = function () { window.scrollTo(0, 0); };
       console.log('effect added')
    },[])
    return (
        <div clsss="container">
            <div className="safe">SYAY SAFE</div>
            <main className="long-copy">
                Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth
            <div className="bu-holder">
                    
                    <button className="cta-left" >Learn More</button>
                    <Link to="/meaters" >
                    <button className="cta-right" id="he" >Show Meaters</button>
                    </Link>
                </div>
            </main>
            <img className="small-virus" src={smallvirus} alt="alt" />
            <img className="small-virus2" src={smallvirus} alt="alt" />
            <img className="img" src={virus} alt="alt"/>
            <svg id="bgl" xmlns="http://www.w3.org/2000/svg" width="897.313" height="223.328" viewBox="0 0 897.313 223.328">
                <path id="left-bg" d="M907.595,1680.5l-5.456-1.312c-86.873-20.894-891.857-222.016-891.857-222.016V1680.5" transform="translate(-10.282 -1457.169)" fill="#7c3bd1" />
            </svg>
            <svg id="bgr" xmlns="http://www.w3.org/2000/svg" width="982.411" height="700.412" viewBox="0 0 982.411 700.412">
                <path id="right-bg" d="M2154.93,301.891l-4.606,3.368c-73.35,53.625-977.594,697.044-977.594,697.044H2155.14" transform="translate(-1172.729 -301.891)" fill="#7c3bd1" />
            </svg>
        </div>
    );
}

export default Landing;