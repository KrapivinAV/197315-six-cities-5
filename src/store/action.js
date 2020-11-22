export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_CURRENT_CITY_OFFERS: `GET_CURRENT_CITY_OFFERS`,
  CHANGE_ACTIVE_OFFER_CARD: `CHANGE_ACTIVE_OFFER_CARD`,
  ADD_NEW_COMMENT: `ADD_NEW_COMMENT`
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

  changeActiveOfferCard: (id) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_CARD,
    payload: id,
  }),

  addNewComment: (id, rating, commentText) => ({
    type: ActionType.ADD_NEW_COMMENT,
    payload: {id, rating, commentText}
  })

};
