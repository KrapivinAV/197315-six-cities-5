import React from "react";
import renderer from "react-test-renderer";
import PropertiesScreen from "./properties-screen";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro, REVIEW_FIRST, REVIEW_SECOND} from "../../test-mocks";

const noop = () => {};

jest.mock(`../map/map`, () => `Map`);

describe(`Render PropertiesScreen`, () => {
  it(`Fetch load status: OK`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        offer: offerFirstCityIsFavoriteIsPremiumHostIsPro,
        nearOffers: [
          offerFirstCityNotFavoriteNotPremiumHostNotPro
        ],
        reviews: [
          REVIEW_FIRST,
          REVIEW_SECOND
        ],
      },
      STATE: {
        currentOfferCardId: `1`,
        currentCity: `Paris`,
        offerPropertiesLoadStatus: true,
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
                <PropertiesScreen
                  id={`1`}
                  offerPropertiesLoadStatus={true}
                  changeOfferPropertiesLoadStatusAction={() => {}}
                  fetchOfferAction={noop}
                  fetchNearOfferListAction={noop}
                  fetchReviewListAction={noop}
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
        offer: offerFirstCityIsFavoriteIsPremiumHostIsPro,
        nearOffers: [
          offerFirstCityNotFavoriteNotPremiumHostNotPro
        ],
        reviews: [
          REVIEW_FIRST,
          REVIEW_SECOND
        ],
      },
      STATE: {
        currentOfferCardId: `1`,
        currentCity: `Paris`,
        offerPropertiesLoadStatus: false,
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
                <PropertiesScreen
                  id={`1`}
                  offerPropertiesLoadStatus={false}
                  changeOfferPropertiesLoadStatusAction={() => {}}
                  fetchOfferAction={noop}
                  fetchNearOfferListAction={noop}
                  fetchReviewListAction={noop}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
