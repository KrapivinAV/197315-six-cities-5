export const adaptOffer = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        host: {
          id: offer.host.id,
          name: offer.host.name,
          avatarUrl: `/${offer.host.avatar_url}`,
          isPro: offer.host.is_pro
        },
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image
      }
  );

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

export const adaptOffers = (offers) => {
  return offers.map((offer) => adaptOffer(offer));
};
