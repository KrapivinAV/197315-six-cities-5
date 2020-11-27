export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_CURRENT_CITY_OFFERS: `GET_CURRENT_CITY_OFFERS`,
  CHANGE_ACTIVE_OFFER_CARD: `CHANGE_ACTIVE_OFFER_CARD`,
  ADD_NEW_COMMENT: `ADD_NEW_COMMENT`,
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const changeCity = (cityName) => ({
  type: ActionType.CHANGE_CITY,
  payload: cityName,
});

export const getCurrentCityOffers = (cityName, offers) => ({
  type: ActionType.GET_CURRENT_CITY_OFFERS,
  payload: offers.filter((item) => item.city.name === cityName),
});

export const changeActiveOfferCard = (id) => ({
  type: ActionType.CHANGE_ACTIVE_OFFER_CARD,
  payload: id,
});

export const addNewComment = (id, rating, commentText) => ({
  type: ActionType.ADD_NEW_COMMENT,
  payload: {id, rating, commentText},
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadNearOffers = (nearOffers) => ({
  type: ActionType.LOAD_NEAR_OFFERS,
  payload: nearOffers,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
