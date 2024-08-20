package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Review;

public interface ReviewService {

    public List<Review> getAllReviews();
    public Review addReview(Review review);
    public List<Review> getReviewByUserId(Long userId);
    public List<Object> fetchResortsAverage();
}
