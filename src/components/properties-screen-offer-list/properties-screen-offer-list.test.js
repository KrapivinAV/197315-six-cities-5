import React from "react";
import renderer from "react-test-renderer";
import PropertiesScreenOfferList from "./properties-screen-offer-list";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO} from "../../test-mocks";

describe(`Render PropertiesScreenOfferList`, () => {
  it(`Render PropertiesScreenOfferList`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      STATE: {
        currentOfferCardId: `1`,
      },
      USER: {
        authorizationStatus: `NO_AUTH`,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <PropertiesScreenOfferList
                  offers={[OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO]}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
