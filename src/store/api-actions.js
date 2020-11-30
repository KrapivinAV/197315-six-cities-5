import {loadOffer, loadNearOffers, loadOffers, loadReviews, loadFavorites, loadUpdatedOffer, loadUserData, requireAuthorization} from "./actions";
import {AuthorizationStatus} from "../const";
import {adaptOffer, adaptOffers} from "../utils/adapt-offers";
import {adaptReviews} from "../utils/adapt-reviews";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(adaptOffers(data))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(loadOffer(adaptOffer(data))))
);

export const fetchNearOfferList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadNearOffers(adaptOffers(data))))
);

export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadReviews(adaptReviews(data))))
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavorites(adaptOffers(data))))
);

export const changeOfferFavoriteStatus = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`, {id, status})
    .then((data) => dispatch(loadUpdatedOffer(adaptOffer(data.data))))
    .then(() => dispatch(loadOffers([
      ..._getState().DATA.offers.slice(0, _getState().DATA.offers.findIndex((offer) => offer.id === _getState().DATA.updatedOffer.id)),
      Object.assign(
          {},
          _getState().DATA.offers[_getState().DATA.offers.findIndex((offer) => offer.id === _getState().DATA.updatedOffer.id)],
          {
            isFavorite: _getState().DATA.updatedOffer.isFavorite
          }
      ),
      ..._getState().DATA.offers.slice(_getState().DATA.offers.findIndex((offer) => offer.id === _getState().DATA.updatedOffer.id) + 1),
    ])))
    .then(() =>
      _getState().DATA.favorites.findIndex((offer) => offer.id === _getState().DATA.updatedOffer.id) === -1 ?
        dispatch(loadFavorites([
          ..._getState().DATA.favorites,
          _getState().DATA.updatedOffer
        ])) :
        dispatch(loadFavorites([
          ..._getState().DATA.favorites.slice(0, _getState().DATA.favorites.findIndex((offer) => offer.id === _getState().DATA.updatedOffer.id)),
          ..._getState().DATA.favorites.slice(_getState().DATA.favorites.findIndex((offer) => offer.id === _getState().DATA.updatedOffer.id) + 1)
        ]))
    )
    .then(() =>
      _getState().DATA.nearOffers.findIndex((offer) => offer.id === _getState().DATA.updatedOffer.id) === -1 ?
        dispatch(loadNearOffers(_getState().DATA.nearOffers)) :
        dispatch(loadNearOffers([
          ..._getState().DATA.nearOffers.slice(0, _getState().DATA.nearOffers.findIndex((offer) => offer.id === _getState().DATA.updatedOffer.id)),
          Object.assign(
              {},
              _getState().DATA.nearOffers[_getState().DATA.nearOffers.findIndex((offer) => offer.id === _getState().DATA.updatedOffer.id)],
              {
                isFavorite: _getState().DATA.updatedOffer.isFavorite
              }
          ),
          ..._getState().DATA.nearOffers.slice(_getState().DATA.nearOffers.findIndex((offer) => offer.id === _getState().DATA.updatedOffer.id) + 1),
        ])))
    .then(() =>
      _getState().DATA.offer ?
        dispatch(loadOffer(
            Object.assign(
                {},
                _getState().DATA.offer,
                {
                  isFavorite: _getState().DATA.updatedOffer.isFavorite
                }
            )
        )) :
        null
    )
);

export const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((data) => dispatch(loadUserData(data.data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((data) => dispatch(loadUserData(data.data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const addComment = (id, comment, rating) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then((data) => dispatch(loadReviews(adaptReviews(data.data))))
);
