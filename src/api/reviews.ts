import type { ReviewInterface } from '@/types/api';
import { getDatabaseTable } from './helpers';

export const getReviewsByListingId = (listingId: number): ReviewInterface[] => {
  const reviews = getDatabaseTable('reviews');
  if (!reviews) {
    console.log('No reviews table found');
    return [];
  }

  return reviews.filter((review: ReviewInterface) => review.listingId === Number(listingId));
};
