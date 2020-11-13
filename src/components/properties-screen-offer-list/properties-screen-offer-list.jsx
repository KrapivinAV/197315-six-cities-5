import React from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import OfferList from "../offer-list/offer-list";
import {OfferListStyle, OfferCardStyleSet} from "../../const";

const PropertiesScreenOfferList = ({offers}) => {
  return (

    <OfferList
      offers={offers}
      offerListStyle={OfferListStyle.PROPERTIES_SCREEN}
      offerCardStyleSet={OfferCardStyleSet.PROPERTIES_SCREEN}
    />

  );
};

PropertiesScreenOfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
};

export default PropertiesScreenOfferList;


