import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "../../const";

const MAIN_SCREEN_STATUS = true;
const USER_MAIL = `user@mail.ru`;

describe(`Render Header`, () => {
  it(`Screen: Main. AuthorizationStatus: AUTH`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <Header
                  mainScreenStatus={MAIN_SCREEN_STATUS}
                  authorizationStatus={AuthorizationStatus.AUTH}
                  userMail={USER_MAIL}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Screen: Properties. AuthorizationStatus: NO_AUTH`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <Header
                  authorizationStatus={AuthorizationStatus.NO_AUTH}
                  userMail={USER_MAIL}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
