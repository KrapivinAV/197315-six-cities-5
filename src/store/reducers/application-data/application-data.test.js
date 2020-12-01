import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../actions";
import {
  fetchOffer,
  fetchOfferList,
  fetchNearOfferList,
  fetchReviewList,
  fetchFavoritesList,
  addComment,
  changeOfferFavoriteStatus
} from "../../api-actions";
import {applicationData} from "./application-data";
import {OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO,
  OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO,
  REVIEW_FIRST,
  REVIEW_SECOND} from "../../../test-mocks";
import {adaptOffer} from "../../../utils/adapt-offers";

const api = createAPI(() => {});

const response = {
  "city": {
    "name": `Paris`,
    "location": {
      "latitude": 48.85661,
      "longitude": 2.351499,
      "zoom": 13
    }
  },
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
  "images": [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`
  ],
  "title": `The house among olive `,
  "is_favorite": false,
  "is_premium": false,
  "rating": 3,
  "type": `apartment`,
  "bedrooms": 5,
  "max_adults": 8,
  "price": 226,
  "goods": [
    `Dishwasher`,
    `Fridge`,
    `Towels`,
    `Washer`,
    `Breakfast`,
    `Baby seat`,
    `Laptop friendly workspace`,
    `Air conditioning`,
    `Coffee machine`
  ],
  "host": {
    "id": 25,
    "name": `Angelina`,
    "is_pro": true,
    "avatar_url": `img/avatar-angelina.jpg`
  },
  "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
  "location": {
    "latitude": 48.877610000000004,
    "longitude": 2.333499,
    "zoom": 16
  },
  "id": 6
};

it(`Reducer should update offer by load offer`, () => {
  expect(applicationData({
    offer: null,
  }, {
    type: ActionType.LOAD_OFFER,
    payload: OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO,
  })).toEqual({
    offer: OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO,
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(applicationData({
    offers: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: [OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO],
  })).toEqual({
    offers: [OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO],
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(applicationData({
    nearOffers: [],
  }, {
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: [OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO],
  })).toEqual({
    nearOffers: [OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO],
  });
});

it(`Reducer should update reviews by load reviews`, () => {
  expect(applicationData({
    reviews: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: [REVIEW_FIRST, REVIEW_SECOND],
  })).toEqual({
    reviews: [REVIEW_FIRST, REVIEW_SECOND],
  });
});

it(`Reducer should update favorites by load favorites`, () => {
  expect(applicationData({
    favorites: [],
  }, {
    type: ActionType.LOAD_FAVORITES,
    payload: [OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO],
  })).toEqual({
    favorites: [OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO, OFFER_FIRST_CITY_NOT_FAVORITE_NOT_PREMIUM_HOST_NOT_PRO],
  });
});

it(`Reducer should update offer by load offer`, () => {
  expect(applicationData({
    updatedOffer: null,
  }, {
    type: ActionType.LOAD_UPDATED_OFFER,
    payload: OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO,
  })).toEqual({
    updatedOffer: OFFER_FIRST_CITY_IS_FAVORITE_IS_PREMIUM_HOST_IS_PRO,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchOffer(1);

    apiMock
      .onGet(`/hotels/1`)
      .reply(200, {
        "host": {
          "id": 1,
          "name": `Bob`,
          "avatar_url": `URL`,
          "is_pro": true
        },
        "is_favorite": true,
        "is_premium": true,
        "max_adults": 1,
        "preview_image": `URL`
      });

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: {
            host: {
              id: 1,
              name: `Bob`,
              avatarUrl: `/URL`,
              isPro: true
            },
            isFavorite: true,
            isPremium: true,
            maxAdults: 1,
            previewImage: `URL`
          },
        });
      });
  });

  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchOfferList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{
        "host": {
          "id": 1,
          "name": `Bob`,
          "avatar_url": `URL`,
          "is_pro": true
        },
        "is_favorite": true,
        "is_premium": true,
        "max_adults": 1,
        "preview_image": `URL`
      }]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{
            host: {
              id: 1,
              name: `Bob`,
              avatarUrl: `/URL`,
              isPro: true
            },
            isFavorite: true,
            isPremium: true,
            maxAdults: 1,
            previewImage: `URL`
          }],
        });
      });
  });

  it(`Should make a correct API call to /hotels/1/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchNearOfferList(1);

    apiMock
      .onGet(`/hotels/1/nearby`)
      .reply(200, [{
        "host": {
          "id": 1,
          "name": `Bob`,
          "avatar_url": `URL`,
          "is_pro": true
        },
        "is_favorite": true,
        "is_premium": true,
        "max_adults": 1,
        "preview_image": `URL`
      }]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEAR_OFFERS,
          payload: [{
            host: {
              id: 1,
              name: `Bob`,
              avatarUrl: `/URL`,
              isPro: true
            },
            isFavorite: true,
            isPremium: true,
            maxAdults: 1,
            previewImage: `URL`
          }],
        });
      });
  });

  it(`Should make a correct API call to /comments/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewLoader = fetchReviewList(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{
        "user": {
          "id": 1,
          "name": `Bob`,
          "avatar_url": `URL`,
          "is_pro": true
        }
      }]);

    return reviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{
            user: {
              id: 1,
              name: `Bob`,
              avatarUrl: `URL`,
              isPro: true
            }}],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchFavoritesList();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{
        "host": {
          "id": 1,
          "name": `Bob`,
          "avatar_url": `URL`,
          "is_pro": true
        },
        "is_favorite": true,
        "is_premium": true,
        "max_adults": 1,
        "preview_image": `URL`
      }]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{
            host: {
              id: 1,
              name: `Bob`,
              avatarUrl: `/URL`,
              isPro: true
            },
            isFavorite: true,
            isPremium: true,
            maxAdults: 1,
            previewImage: `URL`
          }],
        });
      });
  });

  it(`Should make a correct API call to /comments/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const comment = `qwerty`;
    const rating = 5;
    const reviewLoader = addComment(id, comment, rating);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [{
        "user": {
          "id": 1,
          "name": `Bob`,
          "avatar_url": `URL`,
          "is_pro": true
        }
      }]);

    return reviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{
            user: {
              id: 1,
              name: `Bob`,
              avatarUrl: `URL`,
              isPro: true
            }}],
        });
      });
  });

});

describe(``, () => {
  it(``, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeOfferFavoriteStatusLoader = changeOfferFavoriteStatus({id: response.id, status: 1});

    apiMock
      .onPost(`/favorite/${response.id}/1`, {id: response.id, status: 1})
      .reply(200, response);

    return changeOfferFavoriteStatusLoader(dispatch, () => ({
      DATA: {
        offers: [adaptOffer(response)],
        updatedOffer: [adaptOffer(response)],
        favorites: [adaptOffer(response)],
        nearOffers: [adaptOffer(response)],
      }
    })
    , api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_UPDATED_OFFER,
          payload: adaptOffer(response),
        });
      });
  });
});
