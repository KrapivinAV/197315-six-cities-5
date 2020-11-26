import {extend} from "../../../utils/extend";
import {ActionType} from "../../actions";

const initialState = {
  currentCity: ``,
  currentCityOffers: [],
  currentOfferCardId: ``,
};

const applicationState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });

    case ActionType.GET_CURRENT_CITY_OFFERS:
      return extend(state, {
        currentCityOffers: action.payload,
      });

    case ActionType.CHANGE_ACTIVE_OFFER_CARD:
      return extend(state, {
        currentOfferCardId: action.payload,
      });
  }

  return state;
};

export {applicationState};
