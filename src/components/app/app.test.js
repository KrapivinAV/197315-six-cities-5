import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO} from "../../test-mocks";

jest.mock(`../map/map`, () => `Map`);

describe(`Render App`, () => {
  it(`Render App`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        offers: [
          OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO,
          OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO,
        ],
      },
      STATE: {
        currentCity: `Paris`,
        currentOfferCardId: `6`,
      },
      USER: {
        authorizationStatus: `NO_AUTH`,
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
                <App />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
