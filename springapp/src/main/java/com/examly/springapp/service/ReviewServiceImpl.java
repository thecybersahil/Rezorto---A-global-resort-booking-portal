package com.examly.springapp.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Review;
import com.examly.springapp.repository.ReviewRepo;

@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired 
    private ReviewRepo reviewRepo;
    
    @Override
    public List<Review> getAllReviews(){
        return reviewRepo.findAll();
    }
    
    @Override
    public Review addReview(Review review){
        if (review.getDateCreated() == null) {
            review.setDateCreated(new Date()); // Set the current date if not already set
        }
        return reviewRepo.save(review);
    }
    
    @Override
    public List<Review> getReviewByUserId(Long userId)
    {
        return reviewRepo.findByUserId(userId);
    }

    public List<Object> fetchResortsAverage()
    {
        return reviewRepo.fetchResortsAverage();
    }


        
}