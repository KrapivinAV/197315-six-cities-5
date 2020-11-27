import {createSelector} from "reselect";
import {NEAR_OFFERS_MAX_QUANTITY, REVIEWS_MAX_QUANTITY} from "../../const";

export const getOffer = ({DATA}) => {
  return DATA.offer;
};

export const getOffers = ({DATA}) => {
  return DATA.offers;
};

export const getNearOffers = ({DATA}) => {
  return DATA.nearOffers;
};

export const getReviews = ({DATA}) => {
  return DATA.reviews;
};

export const getCurrentCity = ({STATE}) => {
  return STATE.currentCity;
};

export const getCurrentCityOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, cityName) => {
      return offers.filter((item) => item.city.name === cityName);
    }
);

export const getCurrentNearOffers = createSelector(
    getNearOffers,
    (offers) => {
      return offers.slice(0, NEAR_OFFERS_MAX_QUANTITY);
    }
);

export const getCurrentReviews = createSelector(
    getReviews,
    (reviews) => {
      return reviews.slice(0, REVIEWS_MAX_QUANTITY);
    }
);
