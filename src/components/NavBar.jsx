import React, { Component } from 'react';
import srmap from "../images/srmap.png"

class NavBar extends Component {
    render() {
        return (
            <nav className='nav'>
                <img src={srmap} alt="The logo of srmap campus" className='nav-img'></img>
                <div style={{flexGrow:1}}></div>
                <ul style={{display:"flex"}}>
                    <li><div className='nav-link'><a className='nav-link-text' href="/students">Login</a></div></li>
                    <li><div className='nav-link'><a className='nav-link-text' href="/hfhf">Register</a></div></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;