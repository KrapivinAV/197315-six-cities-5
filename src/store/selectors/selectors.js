import {createSelector} from "reselect";
import {NEAR_OFFERS_MAX_QUANTITY, REVIEWS_MAX_QUANTITY} from "../../const";

export const getAuthorizationStatus = ({USER}) => {
  return USER.authorizationStatus;
};

export const getUserMail = ({USER}) => {
  return USER.userData.email;
};

export const getfavoritesLoadStatus = ({STATE}) => {
  return STATE.favoritesLoadStatus;
};

export const getOfferPropertiesLoadStatus = ({STATE}) => {
  return STATE.offerPropertiesLoadStatus;
};

export const getcurrentOfferCardId = ({STATE}) => {
  return STATE.currentOfferCardId;
};

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

export const getFavorites = ({DATA}) => {
  return DATA.favorites;
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
      return reviews
      .slice(0, REVIEWS_MAX_QUANTITY)
      .sort((reviewA, reviewB) => new Date(reviewB.date) - new Date(reviewA.date));
    }
);
