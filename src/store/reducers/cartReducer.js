/*** Reducer:
 * * An arrow function that receives the action and the state
 * * must return an state / new state
 * **/


const cartReducer = (state=[], action) =>{

    

    switch(action.type)
    {
        case "ADD_TO_CART":
        let copyState =[...state, action.payload];
        //copyState.push(action.payload);
        return copyState;

        case "REMOVE_FORM_CART":
        
        return state;

        default:
            break;
    }
    return state;
}

export default cartReducer;

