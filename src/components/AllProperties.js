import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProperties} from '../actions';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

class AllProperties extends Component {
    constructor(props){
        super(props);

        this.inputNameRef = React.createRef();
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
        searchField : '',
        searchedProperties: [],
        notFound : undefined
    }
    
    componentDidMount(){ 
        //Fetch all properties when the component is mounted
        this.props.fetchProperties();
    }

    //Handle form submission
    handleSubmit(e){
        e.preventDefault();
        this.name = this.inputNameRef.current.value.toLowerCase();
        const search = [];
        this.props.properties.map(property =>{
           if (this.name === property.suburb){
             search.push(property);
             this.inputNameRef.current.value = `${this.name + " (" + search[0].postcode + ")"}`;
           };
           if(search.length > 0){
               this.setState({ notFound: false })
           }else{
               this.setState({notFound: true})
           }
           return this.setState({searchedProperties : search})
        })
    }
    
    renderProperties(){
        //Show relevant messages to the user
        if(this.state.notFound === true && this.name.length > 0){
            return <div className="center"><h3 className="color error">No properties found in this area</h3></div>
        }else if(this.state.notFound === undefined){
            return (<div className="center"><h3 className="color">(For demo purposes I only added Reservoir and Couburg) </h3></div>)
        }else if(this.name.length === 0){
            return (<div className="center"><h3 className="color">(For demo purposes I only added Reservoir and Couburg) </h3></div>)
        }
        
        //Go through the array and render all the properties
        return this.state.searchedProperties.map((property,index) =>{
            return (
                <div key={index} className="center main-margin">
                <Link to={`/property/${property.id}`}>
                <div>
                    <div className="property-img">
                    <Slider {...this.settings}>
                     {property.img.map((img, index)=>{
                         return <img key={index} alt="property-img" src={img} />
                     })}
                    </Slider>
                    </div>
                    <div className="property-flex box-shadow">
                        <div className="property-content ">
                            <div>
                                <div>${property.price}</div>
                                <span>{property.street}, {property.suburb.toUpperCase()}, {property.postcode}</span>
                            </div>
                            <div> <i className="fas fa-bed"> {property.bed}</i> <i className="fas fa-bath"> {property.bath} </i> <i className="fas fa-parking"> {property.parking} </i>| {property.type}</div>
                            <span>{property.inspection}</span>
                        </div>
                        <div>
                            <span>
                                <button className="property-button"><i className="fas fa-star"></i></button>
                                <button className="property-button"><i className="fas fa-ellipsis-v"></i></button>
                            </span>
                        </div>
                    </div>
                  </div>
                  </Link>
                </div>
            )
        })


    }
    render() {
        return (
            <div>
                <form className="center">
                    <div>
                    <i className="search icon"></i>
                        <input required type="name" ref={this.inputNameRef}  placeholder="Enter Suburb Name ..." autoFocus></input>
                        <button onClick={(e)=>this.handleSubmit(e)}>Search</button>
                    </div>
                </form>
                <div>
                {this.renderProperties()}
                </div>
            </div>
        );
    }
}

const mapStateToProps =(state)=>{
    return {
        properties : Object.values(state.properties)
    }
}
export default connect(mapStateToProps, {fetchProperties})(AllProperties);