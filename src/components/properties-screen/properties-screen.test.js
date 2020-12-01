import React from "react";
import renderer from "react-test-renderer";
import {PropertiesScreen} from "./properties-screen";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO, REVIEW_FIRST, REVIEW_SECOND} from "../../test-mocks";

const noop = () => {};

jest.mock(`../map/map`, () => `Map`);

describe(`Render PropertiesScreen`, () => {
  it(`Fetch load status: OK`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        offer: OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO,
        nearOffers: [
          OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO
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
        offer: OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO,
        nearOffers: [
          OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO
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
