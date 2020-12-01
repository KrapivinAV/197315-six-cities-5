import {ActionType} from "../../actions";
import {applicationState} from "./application-state";
import {cities} from "../../../const";

it(`Reducer should update city by load city`, () => {
  expect(applicationState({
    currentCity: null,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: cities[0],
  })).toEqual({
    currentCity: cities[0],
  });
});

it(`Reducer should update offer id by load offer id`, () => {
  expect(applicationState({
    currentOfferCardId: null,
  }, {
    type: ActionType.CHANGE_ACTIVE_OFFER_CARD,
    payload: 6,
  })).toEqual({
    currentOfferCardId: 6,
  });
});

it(`Reducer should update offer download status by load offer download status`, () => {
  expect(applicationState({
    offerPropertiesLoadStatus: false,
  }, {
    type: ActionType.CHANGE_OFFER_PROPERTIES_LOAD_STATUS,
    payload: true,
  })).toEqual({
    offerPropertiesLoadStatus: true,
  });
});

it(`Reducer should update favorites download status by load favorites download status`, () => {
  expect(applicationState({
    favoritesLoadStatus: false,
  }, {
    type: ActionType.CHANGE_FAVORITES_LOAD_STATUS,
    payload: true,
  })).toEqual({
    favoritesLoadStatus: true,
  });
});
