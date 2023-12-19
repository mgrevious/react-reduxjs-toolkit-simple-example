import { combineReducers } from "redux";
import packagesReducer from "./packagesReducer";

const reducers = combineReducers({
  packages: packagesReducer,
});

export default reducers;

// Create a reducer function that will call our reducers and return an object
// that looks like { packages: packagesReducer }
export type RootState = ReturnType<typeof reducers>;
