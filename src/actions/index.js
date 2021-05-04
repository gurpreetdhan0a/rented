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

export const fetchProperties = ()=>{
    return {
        type:"FETCH_PROPERTIES",
        payload: properties
    }
}

export const fetchProperty = (id) =>{
    return {
        type: "FETCH_PROPERTY",
        payload: properties[id-1]
    }
} 
