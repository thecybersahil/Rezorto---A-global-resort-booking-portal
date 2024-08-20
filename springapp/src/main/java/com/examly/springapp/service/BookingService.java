package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Booking;

public interface BookingService {

    public Booking getBookingById(Long id);
    public List<Booking> getBookingsByUserId(Long userId);
    public List<Booking> getAllBookings();
    public Booking addBooking(Booking booking);
    public Boolean deleteBooking(Long id);
    public Booking updateBookingStatus(Long id,String newStatus);
    

}