export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_CURRENT_CITY_OFFERS: `GET_CURRENT_CITY_OFFERS`,
};

export const ActionCreator = {

  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),

  getCurrentCityOffers: (cityName, offers) => ({
    type: ActionType.GET_CURRENT_CITY_OFFERS,
    payload: offers.filter((item) => item.city.name === cityName),
  }),

};
