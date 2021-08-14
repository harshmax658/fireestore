// import ShopData from "./ShopData";
import { UPDATE_COLLECTIONS } from "./action";

const initial_state = {
  collection: null,
  isLoading: true,
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS: {
      return {
        ...state,
        collection: action.data,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
