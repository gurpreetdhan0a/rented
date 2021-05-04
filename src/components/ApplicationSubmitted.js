import React from 'react';
import {Link} from 'react-router-dom';

const ApplicationSubmitted = () => {
    return (
        <div>
        <div className="ui success message">
        <div className="header center">
            Your rental application has been successfully submitted.  <Link to="/allProperties"><button className="button">Search for another property</button></Link>
        </div>
        </div>
        
        </div>
    );
};

export default ApplicationSubmitted;