import React from "react";
import renderer from "react-test-renderer";
import {OfferProperties} from "./offer-properties";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "../../const";
import {OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO, REVIEW_FIRST, REVIEW_SECOND} from "../../test-mocks";

const noop = () => {};

jest.mock(`../map/map`, () => `Map`);

describe(`Render OfferProperties`, () => {
  it(`With all flags UP and Auth`, () => {

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
                <OfferProperties
                  offer={OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO}
                  nearOffers={[OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO]}
                  reviews={[REVIEW_FIRST, REVIEW_SECOND]}
                  authorizationStatus={AuthorizationStatus.AUTH}
                  changeOfferFavoriteStatusAction={noop}
                  redirectToRouteAction={noop}
                  addCommentAction={noop}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With all flags DOWN without Auth`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        offer: OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO,
        nearOffers: [
          OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO
        ],
        reviews: [
          REVIEW_SECOND,
          REVIEW_FIRST
        ],
      },
      STATE: {
        currentOfferCardId: `1`,
        currentCity: `Paris`
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
                <OfferProperties
                  offer={OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO}
                  nearOffers={[OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO]}
                  reviews={[REVIEW_FIRST, REVIEW_SECOND]}
                  authorizationStatus={AuthorizationStatus.NO_AUTH}
                  changeOfferFavoriteStatusAction={noop}
                  redirectToRouteAction={noop}
                  addCommentAction={noop}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
