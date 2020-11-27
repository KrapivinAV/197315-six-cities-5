export const OfferListStyle = {
  MAIN_SCREEN: `cities__places-list places__list tabs__content`,
  PROPERTIES_SCREEN: `near-places__list places__list`,
  FAVORITES_SCREEN: `favorites__places`
};

export const OfferCardStyleSet = {
  MAIN_SCREEN: {
    ARTICLE: `cities__place-card`,
    IMAGE_WRAPPER: `cities__image-wrapper`,
    INFO: ``
  },
  PROPERTIES_SCREEN: {
    ARTICLE: `near-places__card`,
    IMAGE_WRAPPER: `near-places__image-wrapper`,
    INFO: ``
  },
  FAVORITES_SCREEN: {
    ARTICLE: `favorites__card`,
    IMAGE_WRAPPER: `favorites__image-wrapper`,
    INFO: `favorites__card-info`
  }
};

export const offerTypes = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

export const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  PROPERTIES: `/offer/:id`
};

export const NEAR_OFFERS_MAX_QUANTITY = 3;
export const REVIEWS_MAX_QUANTITY = 10;
