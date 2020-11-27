import {createSelector} from "reselect";

export const getOffers = ({DATA}) => {
  return DATA.offers;
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
