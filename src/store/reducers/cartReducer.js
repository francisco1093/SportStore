/*** Reducer:
 * * An arrow function that receives the action and the state
 * * must return an state / new state
 * **/

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      /*
       * * if the product (action.payload) exist inside the copy (compare by id)
       * * then just update the quantity of the object that exist in copy
       * * otherwise push the product to copy
       * */

      var copy = [...state];
      for (let i = 0; i < copy.length; i++) {
        if (copy[i].id === action.payload.id) {
          copy[i].quantiry += action.payload.quantiry;
          return copy;
        }
      }

      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      return state.filter(prod => prod.id !== action.payload);
      //return copy;

    case "CLEAR_CART":
      return [];

    default:
      break;
  }
  return state;
};

export default cartReducer;
