import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";

const offer1 = {
  city: {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
  images: [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`
  ],
  title: `The house among olive`,
  rating: 3,
  type: `apartment`,
  bedrooms: 5,
  price: 226,
  goods: [
    `Dishwasher`,
    `Fridge`,
    `Towels`
  ],
  host: {
    id: 25,
    name: `Angelina`,
    avatarUrl: `/img/avatar-angelina.jpg`,
    isPro: true
  },
  description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything.`,
  location: {
    latitude: 48.87761,
    longitude: 2.333499,
    zoom: 16
  },
  id: 1,
  isFavorite: true,
  isPremium: false,
  maxAdults: 8
};

const offer2 = {
  city: {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
  images: [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`
  ],
  title: `The house among olive`,
  rating: 3,
  type: `apartment`,
  bedrooms: 5,
  price: 226,
  goods: [
    `Dishwasher`,
    `Fridge`,
    `Towels`
  ],
  host: {
    id: 25,
    name: `Angelina`,
    avatarUrl: `/img/avatar-angelina.jpg`,
    isPro: true
  },
  description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything.`,
  location: {
    latitude: 48.87761,
    longitude: 2.333499,
    zoom: 16
  },
  id: 2,
  isFavorite: true,
  isPremium: false,
  maxAdults: 8
};

const offer3 = {
  city: {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
  images: [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`
  ],
  title: `The house among olive`,
  rating: 3,
  type: `apartment`,
  bedrooms: 5,
  price: 226,
  goods: [
    `Dishwasher`,
    `Fridge`,
    `Towels`
  ],
  host: {
    id: 25,
    name: `Angelina`,
    avatarUrl: `/img/avatar-angelina.jpg`,
    isPro: true
  },
  description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything.`,
  location: {
    latitude: 48.87761,
    longitude: 2.333499,
    zoom: 16
  },
  id: 3,
  isFavorite: true,
  isPremium: false,
  maxAdults: 8
};

const review = {
  id: 1,
  rating: 3,
  comment: `99999999999999999999999999999999999999999999999999999`,
  date: `2020-11-30T06:28:10.586Z`,
  user: {
    id: 1,
    name: `ak`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
    isPro: false
  }

};

const mockStoreData = {
  DATA: {
    offer1,
    offers: [
      offer1,
      offer2,
      offer3
    ],
    nearOffers: [
      offer1,
      offer2,
      offer3
    ],
    reviews: [
      review,
      review,
      review
    ],
    favorites: [
      offer1
    ],
  },
  STATE: {
    currentCity: `Paris`,
    currentOfferCardId: `6`,
    offerPropertiesLoadStatus: false,
    favoritesLoadStatus: false
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
    userData: {
      id: 1,
      email: `user@mail.ru`,
      name: `user`,
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
      isPro: false
    }
  }
};

describe(`Render App`, () => {
  it(`Render App`, () => {

    const mockStore = configureStore([]);
    const store = mockStore(mockStoreData);

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <App />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
