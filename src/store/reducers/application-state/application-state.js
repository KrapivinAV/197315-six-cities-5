import {extend} from "../../../utils/extend";
import {ActionType} from "../../actions";

const initialState = {
  currentCity: ``,
  currentOfferCardId: ``,
  offerPropertiesLoadStatus: false,
  favoritesLoadStatus: false,
};

const applicationState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });

    case ActionType.CHANGE_ACTIVE_OFFER_CARD:
      return extend(state, {
        currentOfferCardId: action.payload,
      });

    case ActionType.CHANGE_OFFER_PROPERTIES_LOAD_STATUS:
      return extend(state, {
        offerPropertiesLoadStatus: action.payload,
      });

    case ActionType.CHANGE_FAVORITES_LOAD_STATUS:
      return extend(state, {
        favoritesLoadStatus: action.payload,
      });
  }

  return state;
};

export {applicationState};
