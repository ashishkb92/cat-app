import { combineReducers } from "redux";
import { FETCH_CAT_TYPES } from "./actions";


const catTypes = (state = [], action) => {
  if (action.type === FETCH_CAT_TYPES) {
    return ["bengal", "bombay", "himalayan", "bobtail"];
  }
  return state;
};

const rootReducer = combineReducers({ catTypes });

export default rootReducer;
