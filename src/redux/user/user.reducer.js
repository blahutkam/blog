import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  //null is consided as a value
  currentUser: null,
};
//if stste is not defined it gets it's value from INTIAL_STATE const
//action object is just a type and payload
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
