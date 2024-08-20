package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking,Long>{

    @Query("select b from Booking b where b.user.userId= ?1")
    public List<Booking> findByUserId(Long userId);

}