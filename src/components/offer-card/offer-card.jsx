import React from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import {Link} from "react-router-dom";

const OfferCard = ({offer, onCardHover, cardStyle, cardImageWrapperStyle, cardInfoStyle}) => {
  const {id, title, premium, isFavorite, type, rating, price, photos} = offer;
  const naturalRating = `${Math.round(rating) * 20}%`;

  const premiumType = premium ?
    (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    ) :
    null;

  const favoriteButtonStyle = isFavorite ?
    `place-card__bookmark-button place-card__bookmark-button--active button` :
    `place-card__bookmark-button button`;

  return (
    <article
      className={`${cardStyle} place-card`}
      onMouseOver={onCardHover}
    >

      {cardStyle === `cities__place-card` ? premiumType : null}

      <div className={`${cardImageWrapperStyle} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={photos[0]} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className={`${cardInfoStyle} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favoriteButtonStyle} type="button">
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
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypesSet.offer,
  onCardHover: PropTypes.func.isRequired,
  cardStyle: PropTypes.string.isRequired,
  cardImageWrapperStyle: PropTypes.string.isRequired,
  cardInfoStyle: PropTypes.string.isRequired
};

export default OfferCard;
