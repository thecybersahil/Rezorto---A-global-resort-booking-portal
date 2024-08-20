package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Review;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface ReviewRepo extends JpaRepository<Review,Integer> {
    @Query("select r from Review r where r.user.userId= ?1")
    public List<Review> findByUserId(Long userId);

    @Query("SELECT r.subject, AVG(r.rating) AS rating FROM Review r GROUP BY r.subject")
public List<Object> fetchResortsAverage();


}
