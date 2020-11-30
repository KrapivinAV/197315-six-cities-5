import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {ScreenMarker} from "../../const";
import {offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro} from "../../test-mocks";

const CURRENT_OFFER_CARD_ID = `1`;

jest.mock(`leaflet`, () => ({
  icon: () => {},
  eachLayer: () => {},
  map: () => ({
    setView: () => {}
  }),
  tileLayer: () => ({
    addTo: () => {}
  }),
  marker: () => ({
    addTo: () => {}
  })
}));

describe(`Render Map`, () => {
  it(`On Main Screen`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <Map
                  offers={[offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro]}
                  currentOfferCardId={CURRENT_OFFER_CARD_ID}
                  screenMarker={ScreenMarker.MAIN}
                />
              </Route>
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: () => {
              const div = document.createElement(`div`);
              div.id = `map`;
              return div;
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`On Properties Screen`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <Map
                  offers={[offerFirstCityIsFavoriteIsPremiumHostIsPro, offerFirstCityNotFavoriteNotPremiumHostNotPro]}
                  currentOfferCardId={CURRENT_OFFER_CARD_ID}
                  screenMarker={ScreenMarker.PROPERTIES}
                />
              </Route>
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: () => {
              const div = document.createElement(`div`);
              div.id = `map`;
              return div;
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
