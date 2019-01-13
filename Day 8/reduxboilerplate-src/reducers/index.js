import { INCREMENT, DECREMENT, CLEAR } from "../actions";

// initialize default state
//const initialState = 0;
//Now have to set intialState to be an object with value of 0
const initialState = {
  value: 0
};

// create reducer function
// This is where the actual functionality of the switches takes place
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      //return state.value += action.value
      return Object.assign({}, state, state.value += action.value);
    case DECREMENT:
      return Object.assign({}, state, state.value -= action.value);
    case CLEAR:
      return Object.assign({}, state, state.value = 0);
    default:
      return state;
  }
};
