import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchPackages = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    console.log("dispatching action...");
    dispatch({
      type: ActionType.SEARCH_PACKAGES,
    });

    try {
      console.log("GET resource from npmjs.org registry via Axios.");
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        { params: { text: term } }
      );
      const names = data.objects.map((result: any) => result.package.name);
      dispatch({ type: ActionType.SEARCH_PACKAGES_SUCCESS, payload: names });
    } catch (err) {
      console.log(
        "Error thrown after attempting to GET resource from npmjs.org via Axios."
      );
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_PACKAGES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
