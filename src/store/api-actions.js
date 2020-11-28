import {loadOffer, loadNearOffers, loadOffers, loadReviews, requireAuthorization} from "./actions";
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

export const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
