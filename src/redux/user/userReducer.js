import { SET_CURRENT_USER } from "./action";

const initialUserState = {
  currentUser: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.data,
      };
    default:
      return state;
  }
};
export default userReducer;
