package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Review;
import com.examly.springapp.service.ReviewServiceImpl;

@RestController
public class ReviewController {
    @Autowired
    ReviewServiceImpl reviewServiceImpl;

    
    @PostMapping("/api/review")
    public ResponseEntity<?> addReview(@RequestBody Review review){
        Review newReview = reviewServiceImpl.addReview(review);
        if(newReview!=null){
            return ResponseEntity.status(201).body(newReview);
        }
        else{
            return ResponseEntity.status(500).body(null);
        }
    }
    
    @GetMapping("/api/review")
    public ResponseEntity<List<Review>> getAllReviews(){
        List<Review> listOfReviews =reviewServiceImpl.getAllReviews();
        if(listOfReviews.isEmpty()){
            return ResponseEntity.status(500).body(null);
        }
        else{
            return ResponseEntity.status(200).body(listOfReviews);
        }
    }
    
    @GetMapping("/api/review/user/{userId}")
    public ResponseEntity<?> getReviewByUserId(@PathVariable Long userId){
        List<Review> listOfUserReviews = reviewServiceImpl.getReviewByUserId(userId);
        if(listOfUserReviews.isEmpty()){
            return ResponseEntity.status(500).body(null);
        }
        else{
            return ResponseEntity.status(200).body(listOfUserReviews);
        }
    }

    @GetMapping("/api/review/rating")
    public ResponseEntity<?> fetchResortsAverage(){
            return ResponseEntity.status(200).body(reviewServiceImpl.fetchResortsAverage());
    }
}
