import {combineReducers} from "redux";
import {applicationData} from "./application-data/application-data";
import {applicationState} from "./application-state/application-state";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: applicationData,
  [NameSpace.STATE]: applicationState,
  [NameSpace.USER]: user,
});
