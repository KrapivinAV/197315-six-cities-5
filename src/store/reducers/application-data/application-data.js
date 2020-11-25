import {extend} from "../../../utils/extend";
import {ActionType} from "../../actions";

const initialState = {
  offers: [],
  reviews: []
};

const applicationData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.ADD_NEW_COMMENT:
      return extend(state, {
        comment: action.payload,
      });
  }

  return state;
};

export {applicationData};
