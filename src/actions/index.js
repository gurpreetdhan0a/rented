import {properties} from '../components/db.json';

export const signIn =(userId, username) =>{
    return {
        type: 'SIGN_IN',
        payload: userId,
        username: username
    } 
}

export const signOut = ()=>{
    return {
        type: 'SIGN_OUT'
    }
}

//Fetch all the properties from db.json file
export const fetchProperties = ()=>{
    return {
        type:"FETCH_PROPERTIES",
        payload: properties
    }
}

//Fetch a particular property using id
export const fetchProperty = (id) =>{
    return {
        type: "FETCH_PROPERTY",
        payload: properties[id-1]
    }
} 
