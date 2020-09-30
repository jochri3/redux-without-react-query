import { FETCH_USERS, IS_LOADING } from "../action.types";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch) => {
    console.log("yoo");
    dispatch({ type: IS_LOADING });
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("users : ", users);
    dispatch({ type: FETCH_USERS, payload: users.data });
  };
};
