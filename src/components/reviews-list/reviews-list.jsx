import React from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import ReviewsItem from "../reviews-item/reviews-item";

const ReviewsList = (props) => {
  const {offerReviews} = props;

  return (
    <ul className="reviews__list">

      {offerReviews.map((item) => (

        <ReviewsItem key={item.id} item={item}/>

      ))}

    </ul>
  );
};

ReviewsList.propTypes = {
  offerReviews: PropTypes.arrayOf(PropTypesSet.review).isRequired,
};

export default ReviewsList;
