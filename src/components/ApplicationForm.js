import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";

class ApplicationForm extends Component {
    state = {
        startDate : new Date(),
        newDate : new Date()
    }

    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        this.settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow : true
        }
        this.property = this.props.location.state.propertyDetail;

        if (!this.props.auth.isSignedIn)
        return <h1 className="center">Please sign in with Google to proceed to the application</h1>


        return (
            <div>
            <h1 className="center">Hi {this.props.auth.username}, Welcome to Rented</h1>
            <div className="ui container box-shadow">
            <div className="property-img small-img center">
            <img src={this.property.img[0]} alt="property-img"/>
            </div>
            <div className="p-flex">
            <div>
            <h1>Application</h1>
                <h2>{this.property.street}, {this.property.suburb} ({this.property.postcode})</h2>
                <div> <i className="fas fa-bed"> {this.property.bed}</i> <i className="fas fa-bath"> {this.property.bath} </i> <i className="fas fa-parking"> {this.property.parking} </i>| {this.property.type}</div>
            </div>
            <div className="manager">
                <h2>Property Manager's Preferences</h2>
                <div className="p-flex">
                    <div>
                        <h3>Rent</h3>
                        <span>${this.property.price}/ week</span>
                    </div>
                    <div>
                        <h3>Rent</h3>
                        <span>12 months</span>
                    </div>
                    <div>
                        <h3>Pets</h3>
                        <span>On application</span>
                    </div>
                </div>
            </div>
            </div>
            <div className="form-seperator"></div>
            <div >
                <h1>My rental Prefrences</h1>
                <h2 className="color">Term (owner prefers 12m + leases)</h2>

                <div>
                <select>
                    <option value="">6 months</option>
                    <option value="">12 months</option>
                    <option value="">26 months</option>
                    <option value="">36 months</option>
                </select>
                <span className="custom-arrow"></span>
                </div>
            </div>
            <div className="input-seperator"></div>
            <div>
            <h2 className="color">Lease Start</h2>
            <DatePicker className="date" minDate={this.state.newDate} selected={this.state.startDate} onChange={date => this.setState({startDate : date})} />
            </div>
            <div className="input-seperator"></div>
            <div>
                <h2 className="color">Advert rent : ${this.property.price} p/w</h2>
            </div>
            <div className="form-seperator"></div>
            <div >
                <h1>Our Household</h1>
                <div>
                <select>
                    <option value="">Single</option>
                    <option value="">Couple</option>
                    <option value="">Family</option>
                    <option value="">Group</option>
                </select>
                <span className="custom-arrow"></span>
                </div>
            </div>
            <div className="input-seperator"></div>
            <div>
                <h2 className="color">About Us(optional)</h2>
                <textarea placeholder="Tell the Property Manager a bit about yourself"></textarea>
            </div>
            <div className="input-seperator"></div>
            <div>
                <h2 className="color">Special Requests(optional)</h2>
                <textarea placeholder="Add any special requests for the property manager"></textarea>
            </div>
            <div className="b-flex">
            <Link to="/applicationSubmitted"><button className="center g-button width">Submit application</button>
            </Link>
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        auth : state.auth
    }
}
export default connect(mapStateToProps, {}) (ApplicationForm);