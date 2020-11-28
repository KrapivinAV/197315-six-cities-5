import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import OfferProperties from "../offer-properties/offer-properties";
import Preloader from "../preloader/preloader";

const PropertiesScreen = ({preloaderStatus}) => {

  return (
    <div className="page">

      <Header/>

      {preloaderStatus} ?
      <Preloader /> :
      <OfferProperties />

    </div>
  );
};

PropertiesScreen.propTypes = {
  preloaderStatus: PropTypes.bool.isRequired
};

export default PropertiesScreen;
