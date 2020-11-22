import React from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import OfferCard from "../offer-card/offer-card";

const OfferList = ({offers, offerListStyle, offerCardStyleSet}) => {

  return (
    <div className={offerListStyle}>

      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          offerCardStyleSet={offerCardStyleSet}
        />
      ))}

    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  offerListStyle: PropTypes.string.isRequired,
  offerCardStyleSet: PropTypes.shape({
    ARTICLE: PropTypes.string.isRequired,
    IMAGE_WRAPPER: PropTypes.string.isRequired,
    INFO: PropTypes.string.isRequired
  }).isRequired
};

export default OfferList;
