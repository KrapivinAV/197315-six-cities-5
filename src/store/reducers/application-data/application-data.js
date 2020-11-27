import {extend} from "../../../utils/extend";
import {ActionType} from "../../actions";

const initialState = {
  offer: {},
  offers: [],
  nearOffers: [],
  reviews: []
};

const applicationData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER:
      return extend(state, {
        offer: action.payload,
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload,
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
