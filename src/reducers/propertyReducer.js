import _ from 'lodash';
const propertyReducer = (state={}, action)=>{
    switch(action.type){
        //Fetch properties and add make id as a key using lodash
        case "FETCH_PROPERTIES":
            return {...state, ..._.mapKeys(action.payload, 'id')};
        //Get property using id
        case "FETCH_PROPERTY" :
            return {...state, [action.payload.id] : action.payload}
        default:
            return state;
    }
}

export default propertyReducer;