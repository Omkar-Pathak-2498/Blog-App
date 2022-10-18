import { combineReducers } from "redux";

import postReducer from "./postReducer";
import usersReducer from "./usersReducers";

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
});
