import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperty } from '../actions';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

class PropertyDetail extends Component {

    constructor(props){
        super(props);

        this.settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow : true
        }
    }
    state={
        propertyDetail : {}
    }

    componentDidMount(){
        this.props.fetchProperty(this.props.match.params.id);
        window.scroll(0,0);
     }

    
    render() {
        if(this.props.property === undefined){
            return <h1> hello</h1>
        }
        console.log(this.props.property)
        return (
            <React.Fragment>
            <div className="center main-margin">
            <div className="property-img">
                    <Slider {...this.settings}>
                     {this.props.property.img.map((img, index)=>{
                         return <img key={index} alt="property-img" src={img} />
                     })}
                    </Slider>
            </div>
            <div className="property-flex box-shadow">
                        <div className="property-content ">
                            <div>
                                <div>${this.props.property.price}</div>
                                <span>{this.props.property.street}, {this.props.property.suburb}</span>
                            </div>
                            <div> <i className="fas fa-bed"> {this.props.property.bed}</i> <i className="fas fa-bath"> {this.props.property.bath} </i> <i className="fas fa-parking"> {this.props.property.parking} </i>| {this.props.property.type}</div>
                            <span>{this.props.property.inspection}</span>
                        </div>
                        <div>
                            <span>
                                <button className="property-button"><i className="fas fa-star"></i></button>
                                <button className="property-button"><i className="fas fa-ellipsis-v"></i></button>
                            </span>
                        </div>
                    </div>
                    <div className="form-seperator"></div>

                    <iframe title="map" src={this.props.property.location} style={{border : 0}} allowfullscreen="" loading="lazy"></iframe>

                    <div className="form-seperator"></div>
                     <div className="left">
                    <h1>Built to impress</h1>
                    <h5>{this.props.property.street}</h5>
                    <p>**ARRANGE AN INSPECTION TIME ONLINE - DETAILS BELOW**</p>
                    <p>This modern built and large property boasts with features and is conveniently located close to all amenities, features include two generous sized bedrooms both with built in robes, huge open plan living area which leads to the elegant kitchen meals area with gas stainless steel appliances and the added bonus of a dishwasher, central bathroom with shower, bath, toilet and vanity unit and a separate powder room, ducted heating, cooling. alarm system, single lock up garage private courtyard and much more.
                     <br/>
                     <br/>
                    Arranging an inspection is easy! To book a time to inspect, simply click Register To Inspect to arrange. By registering, you will be INSTANTLY informed of any updates, changes or cancellations for your appointment
                    <br/><br/>
                    *** COVID-19 Announcement *** If you're attending an open for inspection, we request that you only attend if you are fit and healthy to do so and not under any self-isolation conditions. We request that you maintain a healthy distance from anyone attending the open for inspection, including other prospective buyers and our team members, and if requested wait outside so as to reduce the number of people in the property at any one time. Lastly, please refrain from touching items/fixtures and doors within the properties. If you would like to view something in particular, please request the agent's assistance. Thank you.</p>
                    </div>
              <Link to={{
                  pathname: "/applicationForm",
                  state : {
                      propertyDetail : this.props.property
                  }
              }}><button className="a-button">Apply with rented</button></Link>  
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps =(state, ownProps) =>{
    return{
        property : state.properties[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, {fetchProperty})(PropertyDetail);