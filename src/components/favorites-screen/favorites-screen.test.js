import React from "react";
import renderer from "react-test-renderer";
import {FavoritesScreen} from "./favorites-screen";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_SECOND_CITY_IS_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO} from "../../test-mocks";

const noop = () => {};

describe(`Render FavoritesScreen`, () => {
  it(`Fetch load status: OK`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        favorites: [OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_SECOND_CITY_IS_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO]
      },
      STATE: {
        currentOfferCardId: `1`,
        favoritesLoadStatus: true
      },
      USER: {
        authorizationStatus: `AUTH`,
        userData: {
          email: `user@mail.ru`,
        }
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <FavoritesScreen
                  favoritesLoadStatus={true}
                  changeFavoritesLoadStatusAction={noop}
                  fetchFavoritesListAction={noop}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Fetch load status: Processing`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        favorites: [OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_SECOND_CITY_IS_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO]
      },
      STATE: {
        currentOfferCardId: `1`,
        favoritesLoadStatus: false
      },
      USER: {
        authorizationStatus: `AUTH`,
        userData: {
          email: `user@mail.ru`,
        }
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <FavoritesScreen
                  favoritesLoadStatus={false}
                  changeFavoritesLoadStatusAction={noop}
                  fetchFavoritesListAction={noop}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
