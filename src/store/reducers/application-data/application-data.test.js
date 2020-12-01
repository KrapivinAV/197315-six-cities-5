import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../actions";
import {fetchOffer} from "../../api-actions";
import {applicationData} from "./application-data";
import {offerFirstCityIsFavoriteIsPremiumHostIsPro} from "../../../test-mocks";

const api = createAPI(() => {});

it(`Reducer should update questions by load questions`, () => {
  expect(applicationData({
    offer: [],
  }, {
    type: ActionType.LOAD_OFFER,
    payload: offerFirstCityIsFavoriteIsPremiumHostIsPro,
  })).toEqual({
    offer: offerFirstCityIsFavoriteIsPremiumHostIsPro,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /offer/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchOffer();

    apiMock
      .onGet(`/offer/1`)
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
              avatarUrl: `URL`,
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
});
