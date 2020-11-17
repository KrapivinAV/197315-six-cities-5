import React from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import OfferList from "../offer-list/offer-list";
import {OfferListStyle, OfferCardStyleSet} from "../../const";

const MainScreenOfferList = ({offers}) => {

  return (

    <OfferList
      offers={offers}
      offerListStyle={OfferListStyle.MAIN_SCREEN}
      offerCardStyleSet={OfferCardStyleSet.MAIN_SCREEN}
    />

  );
};

MainScreenOfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
};

export default MainScreenOfferList;
