const SortType = {
  POPULAR: `popular`,
  TO_HIGH: `to-high`,
  TO_LOW: `to-low`,
  TOP_RATED: `top-rated`
};

export const sorter = (offers, sortType) => {
  switch (sortType) {
    case SortType.TO_HIGH:
      return offers.sort((offerA, offerB) => offerA.price - offerB.price);
    case SortType.TO_LOW:
      return offers.sort((offerA, offerB) => offerB.price - offerA.price);
    case SortType.TOP_RATED:
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
  }

  return offers;
};
