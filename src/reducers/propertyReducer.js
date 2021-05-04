import _ from 'lodash';
const propertyReducer = (state={}, action)=>{
    switch(action.type){
        case "FETCH_PROPERTIES":
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case "FETCH_PROPERTY" :
            return {...state, [action.payload.id] : action.payload}
        default:
            return state;
    }
}

export default propertyReducer;