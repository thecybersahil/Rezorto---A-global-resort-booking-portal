import { Review } from './review.model';

describe('Review Model', () => {

  fit('frontend_review model should create an instance', () => {
    // Create a sample user object
    const review: Review = {
      body: 'Sample',
      rating: 2,
      subject: 'Sample',
    };

    expect(review).toBeTruthy();
    expect(review.body).toBe('Sample');
    expect(review.rating).toBe(2);

  });
});
