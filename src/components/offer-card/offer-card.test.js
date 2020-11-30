import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "./offer-card";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {OfferCardStyleSet, AuthorizationStatus} from "../../const";
import {offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro} from "../../test-mocks";

const noop = () => {};

describe(`Render OfferCard`, () => {
  it(`Screen: Main. Properties: Favorite, Premium.`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <OfferCard
                  offer={offerFirstCityIsFavoriteIsPremiumHostIsPro}
                  currentOfferCardId={1}
                  authorizationStatus={AuthorizationStatus.AUTH}
                  changeActiveOfferCardAction={noop}
                  changeOfferFavoriteStatusAction={noop}
                  redirectToRouteAction={noop}
                  offerCardStyleSet={OfferCardStyleSet.MAIN_SCREEN}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Screen: Main. Properties: Not Favorite, Not Premium.`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <OfferCard
                  offer={offerFirstCityNotFavoriteNotPremiumHostNotPro}
                  currentOfferCardId={1}
                  authorizationStatus={AuthorizationStatus.AUTH}
                  changeActiveOfferCardAction={noop}
                  changeOfferFavoriteStatusAction={noop}
                  redirectToRouteAction={noop}
                  offerCardStyleSet={OfferCardStyleSet.MAIN_SCREEN}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Screen: Properties. Properties: Favorite, Premium.`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <OfferCard
                  offer={offerFirstCityIsFavoriteIsPremiumHostIsPro}
                  currentOfferCardId={1}
                  authorizationStatus={AuthorizationStatus.AUTH}
                  changeActiveOfferCardAction={noop}
                  changeOfferFavoriteStatusAction={noop}
                  redirectToRouteAction={noop}
                  offerCardStyleSet={OfferCardStyleSet.PROPERTIES_SCREEN}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Screen: Properties. Properties: Not Favorite, Not Premium.`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <OfferCard
                  offer={offerFirstCityNotFavoriteNotPremiumHostNotPro}
                  currentOfferCardId={1}
                  authorizationStatus={AuthorizationStatus.AUTH}
                  changeActiveOfferCardAction={noop}
                  changeOfferFavoriteStatusAction={noop}
                  redirectToRouteAction={noop}
                  offerCardStyleSet={OfferCardStyleSet.PROPERTIES_SCREEN}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Screen: Favorites. Properties: Favorite, Premium.`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <OfferCard
                  offer={offerFirstCityIsFavoriteIsPremiumHostIsPro}
                  currentOfferCardId={1}
                  authorizationStatus={AuthorizationStatus.AUTH}
                  changeActiveOfferCardAction={noop}
                  changeOfferFavoriteStatusAction={noop}
                  redirectToRouteAction={noop}
                  offerCardStyleSet={OfferCardStyleSet.FAVORITES_SCREEN}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Screen: Favorites. Properties: Not Favorite, Not Premium.`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <OfferCard
                  offer={offerFirstCityNotFavoriteNotPremiumHostNotPro}
                  currentOfferCardId={1}
                  authorizationStatus={AuthorizationStatus.AUTH}
                  changeActiveOfferCardAction={noop}
                  changeOfferFavoriteStatusAction={noop}
                  redirectToRouteAction={noop}
                  offerCardStyleSet={OfferCardStyleSet.FAVORITES_SCREEN}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
