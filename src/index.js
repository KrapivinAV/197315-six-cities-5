import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./reviews";

const Settings = {
  OFFERS_COUNT: 5
};

ReactDOM.render(
    <App
      offersCount={Settings.OFFERS_COUNT}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
