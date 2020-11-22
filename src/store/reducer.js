import {extend} from "../utils/extend";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import reviews from "../mocks/reviews";
import {cities} from "../const";

const initialState = {
  currentCity: cities[0],
  currentCityOffers: offers.filter((item) => item.city.name === cities[0]),
  currentOfferCardId: ``,
  offers,
  reviews
};

const reducer = (state = initialState, action) => {
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

    case ActionType.ADD_NEW_COMMENT:
      return extend(state, {
        comment: action.payload,
      });
  }

  return state;
};

export {reducer};
