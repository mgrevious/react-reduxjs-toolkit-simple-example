import { ActionType } from "../action-types";
import { Action } from "../actions";

interface PackagesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const packagesReducer = (
  state: PackagesState = initialState,
  action: Action
): PackagesState => {
  switch (action.type) {
    // The type guard within TypeScript is used to determine the action.payload type by evaluating the value of action.type
    case ActionType.SEARCH_PACKAGES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_PACKAGES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_PACKAGES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default packagesReducer;
