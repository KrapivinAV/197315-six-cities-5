import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro} from "../../test-mocks";

// const mockStoreData = {
//   DATA: {
//     offer1,
//     offers: [
//       offer1,
//       offer2,
//       offer3
//     ],
//     nearOffers: [
//       offer1,
//       offer2,
//       offer3
//     ],
//     reviews: [
//       review,
//       review,
//       review
//     ],
//     favorites: [
//       offer1
//     ],
//   },
//   STATE: {
//     currentCity: `Paris`,
//     currentOfferCardId: `6`,
//     offerPropertiesLoadStatus: false,
//     favoritesLoadStatus: false
//   },
//   USER: {
//     authorizationStatus: `NO_AUTH`,
//     userData: {
//       id: 1,
//       email: `user@mail.ru`,
//       name: `user`,
//       avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
//       isPro: false
//     }
//   }
// };

jest.mock(`../map/map`, () => `Map`);

describe(`Render App`, () => {
  it(`Render App`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        offers: [
          offerFirstCityIsFavoriteIsPremiumHostIsPro,
          offerFirstCityNotFavoriteNotPremiumHostNotPro,
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
