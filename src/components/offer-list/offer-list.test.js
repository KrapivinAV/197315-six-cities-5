import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {OfferListStyle, OfferCardStyleSet} from "../../const";
import {OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO} from "../../test-mocks";

describe(`Render OfferList`, () => {
  it(`On Main Screen`, () => {

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
                <OfferList
                  offers={[OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO]}
                  offerListStyle={OfferListStyle.MAIN_SCREEN}
                  offerCardStyleSet={OfferCardStyleSet.MAIN_SCREEN}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
