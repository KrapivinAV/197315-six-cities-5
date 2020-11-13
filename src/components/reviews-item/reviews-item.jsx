import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ReviewsItem = (props) => {
  const {item} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={item.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {item.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${+item.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {item.text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{moment(item.date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ReviewsItem;
