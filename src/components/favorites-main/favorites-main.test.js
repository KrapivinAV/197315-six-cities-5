import React from "react";
import renderer from "react-test-renderer";
import FavoritesMain from "./favorites-main";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {offerFirstCityIsFavoriteIsPremiumHostIsPro, offerSecondCityIsFavoriteNotPremiumHostNotPro} from "../../test-mocks";

describe(`Render FavoritesMain`, () => {
  it(`FavoritesMain with two cities`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        favorites: [offerFirstCityIsFavoriteIsPremiumHostIsPro, offerSecondCityIsFavoriteNotPremiumHostNotPro]
      },
      STATE: {
        currentOfferCardId: `1`,
      },
      USER: {
        authorizationStatus: `AUTH`,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <FavoritesMain
                  favoriteOffers={[offerFirstCityIsFavoriteIsPremiumHostIsPro, offerSecondCityIsFavoriteNotPremiumHostNotPro]}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`FavoritesMain without offers`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        favorites: []
      },
      STATE: {
        currentOfferCardId: `1`,
      },
      USER: {
        authorizationStatus: `AUTH`,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <FavoritesMain
                  favoriteOffers={[]}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
