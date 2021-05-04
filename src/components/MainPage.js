import React from 'react';
import {Link} from 'react-router-dom'

const MainPage = () => {
    return (
        <React.Fragment>
        <div className="flex">
            <div className="main-text">
            <h1>Find and rent a home faster</h1>
            <p>Put your best foot forward, apply online, get notifications, private, secure.</p>
            <Link to="/allProperties"><button className="button-primary">Get started now</button></Link>
            </div>
            <div className="main-img">
                <img src="https://snug.com/img/homepage/homepage-banner.png" alt="homepage"/>
            </div>
        </div>
        <section className="center">
            <h1>How it works</h1>
            <div className="grid-3">
                <div >
                    <img src="https://snug.com/img/renter/step-1-create-profile.png" alt="homepage"/>
                </div>
                <div>
                    <h2>Step 1</h2>
                    <h2>Create your profile</h2>
                </div>
                <div>
                    <p><i className="far fa-check-circle"></i>Add your address history</p>
                    <p><i className="far fa-check-circle"></i>Add income, employment or Centerlink</p>
                    <p><i className="far fa-check-circle"></i>Complete a background check</p>
                </div>
            </div>
            <div className="grid-3">
                <div >
                    <img src="https://snug.com/img/renter/step-2-apply.png" alt="homepage"/>
                </div>
                <div>
                    <h2>Step 2</h2>
                    <h2>Apply for properties
                    </h2>
                </div>
                <div>
                    <p><i className="far fa-check-circle"></i>Apply solo or as household</p>
                    <p><i className="far fa-check-circle"></i>Get application status updates</p>
                    <p><i className="far fa-check-circle"></i>Be assured your information is kept private and secure</p>
                </div>
            </div>
            <div className="grid-3">
                <div >
                    <img src="https://snug.com/img/renter/step-3-secure-home.png" alt="homepage"/>
                </div>
                <div>
                    <h2>Step 3</h2>
                    <h2>Secure your new home</h2>
                </div>
                <div>
                    <p><i className="far fa-check-circle"></i>Get approved</p>
                    <p><i className="far fa-check-circle"></i>Pay your holding deposit</p>
                    <p><i className="far fa-check-circle"></i>Sign digital lease</p>
                </div>
            </div>
        </section>
        <section className="center white">
            <h1>Why join rented</h1>
            <div className="grid-2">
            <div>
                <img src="https://snug.com/img/renter/get-ahead.svg" alt="homepage"/>
            </div>
            <div>
                <h2>Get ahead of the market</h2>
                <p>Build your complete profile, including rental history, employment details as well as a verified background check and put your best foot forward for the property you love.</p>
            </div>
            </div>
            <div className="grid-2">
            <div>
                <img src="https://snug.com/img/renter/apply-anywhere.svg" alt="homepage"/>
            </div>
            <div>
                <h2>Apply anywhere</h2>
                <p>Save yourself the time and trouble of multiple forms by using your Snug profile to apply with any leading agent. Get your application in faster to maximise your chances of success.</p>
            </div>
            </div>
            <div className="grid-2">
            <div>
                <img src="https://snug.com/img/renter/home.svg" alt="homepage"/>
            </div>
            <div>
                <h2>Best matching properties</h2>
                <p>Snug Match Score helps you understand how your profile matches up to the property manager's requirements based on your verified rental history, employment, background checks and lease offer.</p>
            </div>
            </div>
        </section>
        <section className="center">
            <h1>Our latest blogs</h1>
            <div className="grid-2 blog">
            <div className="post-img">
                <img src="https://snug.com/blog-images/how-to-avoid-going-to-tribunal.jpg" alt="homepage"/>
            <div className="post-content">
            How to avoid going to tribunal: renters guide
            <button className="ui inverted black button">View Post</button>
            </div>
            </div>
            </div>
            <div className="grid-2 blog">
            <div className="post-img">
                <img src="https://snug.com/blog-images/renters-essential-home-security-guide.jpg" alt="homepage"/>
            <div className="post-content">
            Renters essential home security guide
            <button className="ui inverted black button">View Post</button>
            </div>
            </div>
            </div>
            <div className="grid-2 blog">
            <div className="post-img">
                <img src="https://snug.com/blog-images/the-ultimate-working-from-home-guide-image.jpg" alt="homepage"/>
            <div className="post-content">
            The ultimate working from home guide
            <button className="ui inverted black button">View Post</button>
            </div>
            </div>
            </div>
        </section>
        </React.Fragment>
    );
};

export default MainPage;