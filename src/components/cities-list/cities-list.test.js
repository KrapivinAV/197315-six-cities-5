import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";

const CURRENT_CITY = `Paris`;

describe(`Render CitiesList`, () => {
  it(`Render CitiesList`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <CitiesList
                  currentCity={CURRENT_CITY}
                  onCityLinkClick={() => {}}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
