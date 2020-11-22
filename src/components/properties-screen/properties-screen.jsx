import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import CommentForm from "../comment-form/comment-form";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import PropertiesScreenOfferList from "../properties-screen-offer-list/properties-screen-offer-list";
import {offerTypes} from "../../const";

const NEAR_OFFERS_MAX_QUANTITY = 3;

class PropertiesScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this);
  }

  handleCommentFormSubmit() {
  }

  render() {
    const {offer, offers, review, loggedInStatus} = this.props;
    const {title, premium, isFavorite, type, rating, price, photos, bedroomsQuantity, maxAdultsQuantity, inside, owner, description} = offer;
    const {offerReviews} = review[0];

    const nearOffers = offers.slice(0, NEAR_OFFERS_MAX_QUANTITY);

    const naturalRating = `${Math.round(rating) * 20}%`;

    const premiumType = premium ?
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
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={`/`} className="header__logo-link">
                  <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to={loggedInStatus ? `/favorites` : `/login`} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{loggedInStatus ? `Oliver.conner@gmail.com` : `Sign in`}</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">

                {photos.map((photo) => (
                  <div key={photo} className="property__image-wrapper">
                    <img className="property__image" src={photo} alt="Photo studio" />
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
                    {bedroomsQuantity} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdultsQuantity} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">

                    {inside.map((item) => (
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
                      <img className="property__avatar user__avatar" src={owner.avatar} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {owner.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>

                  <ReviewsList offerReviews={offerReviews}/>

                  {loggedInStatus ? <CommentForm onCommentFormSubmit={this.handleCommentFormSubmit}/> : null}

                </section>
              </div>
            </div>
            <section className="property__map map">

              <Map />

            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>

              <PropertiesScreenOfferList offers={nearOffers} />

            </section>
          </div>
        </main>
      </div>
    );
  }
}

PropertiesScreen.propTypes = {
  offer: PropTypesSet.offer.isRequired,
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  review: PropTypes.arrayOf(PropTypesSet.review).isRequired,
  loggedInStatus: PropTypes.bool.isRequired,
};

export default PropertiesScreen;
