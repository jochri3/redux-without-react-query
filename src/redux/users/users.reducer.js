import { FETCH_USERS, IS_LOADING } from "../action.types";

const INTIAL_STATE = {
  data: [],
  isLoading: false
};

const usersReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true };
    case FETCH_USERS:
      return { ...state, isLoading: false, data: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
