import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Navigation extends Component {
    //Navigation Menu
    render() {
        return (
        <div style={{marginTop:"5px"}} className="ui secondary pointing menu black">
        <Link to="/" className="item">
                rented.com
        </Link>     
        <div className="right menu"> 
        <div>
            <GoogleAuth />
        </div>
        <Link to="/allProperties" className="item">
                Search Properties
        </Link>  
        <Link to="/contact" className="item">
                Contact
        </Link>  
        </div>       
        </div>
        );
    }
}

export default Navigation;