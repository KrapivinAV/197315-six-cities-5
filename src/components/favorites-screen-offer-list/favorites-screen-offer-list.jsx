import React from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import OfferList from "../offer-list/offer-list";
import {OfferListStyle, OfferCardStyleSet} from "../../const";

const FavoritesScreenOfferList = ({offers}) => {

  return (

    <OfferList
      offers={offers}
      offerListStyle={OfferListStyle.FAVORITES_SCREEN}
      offerCardStyleSet={OfferCardStyleSet.FAVORITES_SCREEN}
    />

  );
};

FavoritesScreenOfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
};

export default FavoritesScreenOfferList;
