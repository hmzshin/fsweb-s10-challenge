import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
  } from "redux";
  import { noteReducer } from "./reducers/noteReducer";
import logger from "redux-logger";
  import thunk from "redux-thunk";
  
  export const reducers = combineReducers({
   note:noteReducer
  });
  
  export const store = createStore(
    reducers,
    applyMiddleware(logger, thunk)
  );