import {AuthorizationStatus} from "../../../const";
import {extend} from "../../../utils/extend";
import {ActionType} from "../../actions";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: ``
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER_DATA:
      return extend(state, {
        userData: action.payload,
      });
  }

  return state;
};

export {user};
