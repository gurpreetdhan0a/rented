import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: "630496304040-5fb7avg0trtf793932a5clla3lk6sovn.apps.googleusercontent.com",
                scope: "email"
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn)=>{
       if (isSignedIn){
           this.props.signIn(this.auth.currentUser.get().getId(), this.auth.currentUser.get().getBasicProfile().getGivenName());
       }else{
           this.props.signOut();
       }
    }

    renderAuthButton(){
        if (this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return (
            <div>
                <span style={{fontSize: "15px", marginRight:"5px", color:"white"}}>Hi, {this.props.username}</span>
                <button onClick={this.auth.signOut} className="ui red google g-button"> 
                <i className="google icon"/>
                <span>Sign Out</span>
                </button>
            </div>
            )
        }else{
        return (
            <button onClick={this.auth.signIn} className="ui red google g-button"> 
            <i className="google icon"/>
            <span>Sign In</span>
            </button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId, username: state.auth.username }
}

export default connect(mapStateToProps, { signIn, signOut})(GoogleAuth);