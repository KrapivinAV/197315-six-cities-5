import React from "react";
import PropTypesSet from "../../prop-types-set";
import Link from "react-router-dom";

const OfferCard = ({offer}) => {
  const {title, premium, type, rating, price, photos} = offer;
  const naturalRating = `${Math.round(rating) * 20}%`;
  const premiumType = premium ?
    (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    ) :
    null;

  return (
    <article
      className="cities__place-card place-card"
      mouseover>
      {premiumType}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/offer/:id?">
          <img className="place-card__image" src={photos[0]} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: naturalRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer/:id?">
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypesSet.offer
};

export default OfferCard;
