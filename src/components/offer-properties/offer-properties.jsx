import React from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import CommentForm from "../comment-form/comment-form";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import PropertiesScreenOfferList from "../properties-screen-offer-list/properties-screen-offer-list";
import withCommentFormState from "../../hocs/with-comment-form-state/with-comment-form-state";
import {offerTypes, AuthorizationStatus} from "../../const";
import {connect} from "react-redux";
import {getOffer, getCurrentNearOffers, getCurrentReviews, getAuthorizationStatus} from "../../store/selectors/selectors";

const CommentFormWrapped = withCommentFormState(CommentForm);

const OfferProperties = ({offer, nearOffers, reviews, authorizationStatus}) => {
  const {title, isPremium, isFavorite, type, rating, price, images, bedrooms, maxAdults, goods, host, description} = offer;

  console.log(authorizationStatus);

  const naturalRating = `${Math.round(rating) * 20}%`;

  const premiumType = isPremium ?
    (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    ) :
    null;

  const favoriteButtonStyle = isFavorite ?
    `property__bookmark-button property__bookmark-button--active button` :
    `property__bookmark-button button`;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">

            {images.map((image) => (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Photo studio" />
              </div>
            ))}

          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">

            {premiumType}

            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className={favoriteButtonStyle} type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: naturalRating}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating.toFixed(1)}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offerTypes[type]}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">

                {goods.map((item) => (
                  <li key={item} className="property__inside-item">
                    {item}
                  </li>
                ))}

              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

              <ReviewsList offerReviews={reviews}/>

              {authorizationStatus === AuthorizationStatus.AUTH ? <CommentFormWrapped /> : null}

            </section>
          </div>
        </div>
        <section className="property__map map">

          <Map offers={[offer, ...nearOffers]}/>

        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>

          <PropertiesScreenOfferList offers={nearOffers} />

        </section>
      </div>
    </main>
  );
};

OfferProperties.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  offer: PropTypesSet.offer.isRequired,
  nearOffers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  reviews: PropTypes.arrayOf(PropTypesSet.review).isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  offer: getOffer(state),
  nearOffers: getCurrentNearOffers(state),
  reviews: getCurrentReviews(state)
});

export {OfferProperties};
export default connect(mapStateToProps)(OfferProperties);
