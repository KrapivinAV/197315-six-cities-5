import React from "react";
import renderer from "react-test-renderer";
import LoginScreen from "./login-screen";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";

const noop = () => {};

describe(`Render LoginScreen`, () => {
  it(`Render LoginScreen`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({
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
                <LoginScreen
                  onSubmit={noop}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
