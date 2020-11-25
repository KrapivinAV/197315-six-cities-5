import React from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import {Link} from "react-router-dom";
import {offerTypes} from "../../const";
import {connect} from "react-redux";
import {changeActiveOfferCard} from "../../store/actions";

const OfferCard = ({offer, currentOfferCardId, onCardHover, offerCardStyleSet}) => {
  const {id, title, isPremium, isFavorite, type, rating, price, previewImage} = offer;
  const {ARTICLE, IMAGE_WRAPPER, INFO = ``} = offerCardStyleSet;
  const naturalRating = `${Math.round(rating) * 20}%`;

  const handleCardHover = (evt) => {
    if (evt.currentTarget.id !== currentOfferCardId) {
      onCardHover(evt.currentTarget.id);
    }
  };

  const premiumType = isPremium ?
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
      className={`${ARTICLE} place-card`}
      id={id}
      onMouseOver={handleCardHover}
    >

      {ARTICLE === `cities__place-card` ? premiumType : null}

      <div className={`${IMAGE_WRAPPER} place-card__image-wrapper`}>
        <a>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className={`${INFO} place-card__info`}>
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
        <p className="place-card__type">{offerTypes[type]}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypesSet.offer,
  currentOfferCardId: PropTypes.string.isRequired,
  onCardHover: PropTypes.func,
  offerCardStyleSet: PropTypes.shape({
    ARTICLE: PropTypes.string.isRequired,
    IMAGE_WRAPPER: PropTypes.string.isRequired,
    INFO: PropTypes.string.isRequired
  }).isRequired,
};

const mapStateToProps = ({STATE}) => ({
  currentOfferCardId: STATE.currentOfferCardId
});

const mapDispatchToProps = (dispatch) => ({
  onCardHover(id) {
    dispatch(changeActiveOfferCard(id));
  },
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
