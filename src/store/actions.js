export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_ACTIVE_OFFER_CARD: `CHANGE_ACTIVE_OFFER_CARD`,
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  CHANGE_OFFER_PROPERTIES_LOAD_STATUS: `CHANGE_OFFER_PROPERTIES_LOAD_STATUS`,
  CHANGE_FAVORITES_LOAD_STATUS: `CHANGE_FAVORITES_LOAD_STATUS`,
  LOAD_UPDATED_OFFER: `LOAD_UPDATED_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const changeCity = (cityName) => ({
  type: ActionType.CHANGE_CITY,
  payload: cityName,
});

export const changeActiveOfferCard = (id) => ({
  type: ActionType.CHANGE_ACTIVE_OFFER_CARD,
  payload: id,
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

export const loadFavorites = (favorites) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: favorites,
});

export const loadUpdatedOffer = (offer) => ({
  type: ActionType.LOAD_UPDATED_OFFER,
  payload: offer,
});

export const changeOfferPropertiesLoadStatus = (status) => ({
  type: ActionType.CHANGE_OFFER_PROPERTIES_LOAD_STATUS,
  payload: status,
});

export const changeFavoritesLoadStatus = (status) => ({
  type: ActionType.CHANGE_FAVORITES_LOAD_STATUS,
  payload: status,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
