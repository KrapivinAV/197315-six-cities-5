import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization, changeCity} from "./store/actions";
import {fetchOfferList, checkAuthorization} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchOfferList()),
  store.dispatch(checkAuthorization()),
  store.dispatch(changeCity(`Paris`)),
])
.then(() => {
  ReactDOM.render(

      <Provider store={store}>
        <App />
      </Provider>,

      document.querySelector(`#root`)
  );
})
.catch(() => {
  ReactDOM.render(

      <div style={{
        position: `absolute`,
        top: `50%`,
        left: `50%`,
        color: `red`,
        textSize: `100`
      }}>
        SERVER ERROR
      </div>,

      document.querySelector(`#root`)
  );
});
