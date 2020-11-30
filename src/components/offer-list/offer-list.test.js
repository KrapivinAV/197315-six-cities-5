import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {OfferListStyle, OfferCardStyleSet} from "../../const";
import {offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro} from "../../test-mocks";

describe(`Render OfferList`, () => {
  it(`On Main Screen`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <OfferList
                  offers={[offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro]}
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
