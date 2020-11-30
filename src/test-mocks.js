export const offerFirstCityIsFavoriteIsPremiumHostIsPro = {
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
  isPremium: true,
  maxAdults: 8
};

export const offerFirstCityNotFavoriteNotPremiumHostNotPro = {
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
    isPro: false
  },
  description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything.`,
  location: {
    latitude: 48.87761,
    longitude: 2.333499,
    zoom: 16
  },
  id: 2,
  isFavorite: false,
  isPremium: false,
  maxAdults: 8
};

export const offerSecondCityIsFavoriteNotPremiumHostNotPro = {
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
    isPro: false
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

export const REVIEW_FIRST = {
  id: 1,
  rating: 3,
  comment: `99999999999999999999999999999999999999999999999999999`,
  date: `2020-11-30T06:28:10.586Z`,
  user: {
    id: 1,
    name: `ak`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
    isPro: true
  }
};

export const REVIEW_SECOND = {
  id: 2,
  rating: 5,
  comment: `99999999999999999999999999999999999999999999999999999`,
  date: `2020-10-30T06:28:10.586Z`,
  user: {
    id: 1,
    name: `ak`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
    isPro: false
  }
};
