import { UserActionTypes } from "./user.types";

//functions that return object
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
