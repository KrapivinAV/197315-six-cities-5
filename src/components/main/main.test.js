import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro} from "../../test-mocks";

const SELECTED_SORT_TYPE = `popular`;
const CURRENT_CITY = `Paris`;

jest.mock(`../map/map`, () => `Map`);

describe(`Render Main`, () => {
  it(`Main with two offers`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        offers: [offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro]
      },
      STATE: {
        currentOfferCardId: `1`,
        currentCity: `Paris`
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
                <Main
                  currentCity={CURRENT_CITY}
                  currentCityOffers={[offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro]}
                  selectedSortType={SELECTED_SORT_TYPE}
                  onSortTypeChange={() => {}}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Main without offers`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        offers: []
      },
      STATE: {
        currentOfferCardId: `1`,
        currentCity: `Paris`
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
                <Main
                  currenCity={CURRENT_CITY}
                  currentCityOffers={[]}
                  selectedSortType={SELECTED_SORT_TYPE}
                  onSortTypeChange={() => {}}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


});
