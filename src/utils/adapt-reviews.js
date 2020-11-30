export const adaptReview = (review) => {
  const adaptedReview = Object.assign(
      {},
      review,
      {
        user: {
          id: review.user.id,
          name: review.user.name,
          avatarUrl: review.user.avatar_url,
          isPro: review.user.is_pro
        }
      }
  );

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};

export const adaptReviews = (reviews) => {
  return reviews.map((review) => adaptReview(review));
};
