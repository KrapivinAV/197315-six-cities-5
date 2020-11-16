import reviews from "./reviews";

export default [
  {
    id: `offer-1`,
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description: `Morbi auctor varius nunc, vel sollicitudin ligula efficitur at. Nunc sit amet metus non risus aliquet consectetur nec vel quam. Duis venenatis viverra arcu vel malesuada. In a porttitor elit, et lobortis velit. Curabitur at eros ornare, mollis tortor id, lacinia augue. Nunc congue quis massa at pulvinar. Mauris auctor sodales pharetra. Nulla facilisi.`,
    premium: true,
    isFavorite: true,
    type: `apartment`,
    rating: reviews[0].offerReviews.map((item) => item.rating).reduce((acc, currrent) => acc + currrent) / reviews[0].offerReviews.length,
    bedroomsQuantity: 3,
    maxAdultsQuantity: 4,
    price: 150,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    photos: [
      `/img/apartment-03.jpg`,
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/studio-01.jpg`
    ],
    owner: {
      avatar: `/img/avatar-angelina.jpg`,
      name: `Angelina`,
      super: true
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    }
  },
  {
    id: `offer-2`,
    title: `Etiam lectus nibh, eleifend eget sem sed, porttitor ultrices nibh`,
    description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse gravida nibh vel turpis vestibulum, in tincidunt erat tempor. Aenean lectus justo, varius sed orci dignissim, ornare interdum ipsum. Aliquam erat volutpat. Fusce ultrices, quam vitae auctor molestie, purus libero consequat neque, vitae tempor elit sem non quam. In tellus neque, vestibulum ut mi non, elementum blandit risus. Nullam quam magna, consequat et magna in, tempus aliquam mauris. Proin ante nisl, scelerisque vel luctus at, tempus eu elit. Maecenas placerat nibh odio, consequat pulvinar lorem pharetra sit amet. Nam a nibh luctus, varius dui eu, condimentum metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    premium: false,
    isFavorite: true,
    type: `room`,
    rating: reviews[1].offerReviews.map((item) => item.rating).reduce((acc, currrent) => acc + currrent) / reviews[1].offerReviews.length,
    bedroomsQuantity: 2,
    maxAdultsQuantity: 3,
    price: 120,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`
    ],
    photos: [
      `/img/apartment-02.jpg`,
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-03.jpg`
    ],
    owner: {
      avatar: `/img/avatar-max.jpg`,
      name: `Max`,
      super: false
    },
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    }
  },
  {
    id: `offer-3`,
    title: `Suspendisse imperdiet eleifend fringilla`,
    description: `Morbi sagittis, dui sit amet mollis euismod, nunc dui accumsan nisi, sed placerat ex dui a nisi. Mauris nisl mi, ultricies vitae finibus quis, sagittis quis metus. Mauris viverra massa velit, nec efficitur dolor laoreet id. Cras convallis dui neque, eget iaculis enim condimentum sit amet. Phasellus quis sodales dolor. Fusce ultrices fermentum ante a tristique. Aenean convallis, nibh eget fermentum rutrum, enim justo convallis velit, at rutrum ligula diam at nisl. Curabitur tincidunt pellentesque erat in pharetra. Vestibulum aliquam sit amet nisl sit amet ullamcorper. Vivamus nec placerat lorem. Sed tempus velit vitae urna tincidunt congue. Mauris tincidunt, enim at luctus finibus, diam sem porta est, id tempus leo arcu et erat. Aliquam vitae nisl lobortis, condimentum tellus ut, tempus metus. Cras ac lectus lacinia, rhoncus odio id, aliquam nibh. Vivamus ultrices lacus et tristique elementum.`,
    premium: true,
    isFavorite: false,
    type: `house`,
    rating: reviews[2].offerReviews.map((item) => item.rating).reduce((acc, currrent) => acc + currrent) / reviews[2].offerReviews.length,
    bedroomsQuantity: 4,
    maxAdultsQuantity: 5,
    price: 180,
    inside: [
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    photos: [
      `/img/studio-01.jpg`,
      `/img/apartment-01.jpg`
    ],
    owner: {
      avatar: `/img/avatar-angelina.jpg`,
      name: ` `,
      super: true
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    }
  },
  {
    id: `offer-4`,
    title: `Ut sed mi efficitur, eleifend nisl vitae, iaculis felis`,
    description: `Nam volutpat viverra vulputate. Nulla mattis consectetur libero eget iaculis. Phasellus fermentum scelerisque sem at gravida. Fusce vel felis nunc. Vestibulum convallis eleifend diam ac scelerisque. Sed ut augue felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vel tempus felis.`,
    premium: false,
    isFavorite: false,
    type: `hotel`,
    rating: reviews[3].offerReviews.map((item) => item.rating).reduce((acc, currrent) => acc + currrent) / reviews[3].offerReviews.length,
    bedroomsQuantity: 1,
    maxAdultsQuantity: 2,
    price: 70,
    inside: [
      `Baby seat`,
      `Kitchen`
    ],
    photos: [
      `/img/apartment-01.jpg`,
      `/img/room.jpg`,
      `/img/apartment-02.jpg`
    ],
    owner: {
      avatar: `/img/avatar-max.jpg`,
      name: `Max`,
      super: true
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Paris`
    }
  }
];
