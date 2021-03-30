import { combineReducers } from "redux";
import userReducer from "./UserReducer";

const allReducers = combineReducers({
  userReducer: userReducer,
});
export default allReducers;
