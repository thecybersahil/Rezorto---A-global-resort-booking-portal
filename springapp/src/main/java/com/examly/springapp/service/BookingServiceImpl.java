package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Booking;
import com.examly.springapp.repository.BookingRepo;

@Service
public class BookingServiceImpl implements BookingService{

    @Autowired
    BookingRepo bookingRepo;

    @Override
    public Booking getBookingById(Long id) {
        Booking booking=bookingRepo.findById(id).orElse(null);
        return booking;   
    }

    @Override
    public List<Booking> getBookingsByUserId(Long userId) {
       List<Booking> listofbookings=bookingRepo.findByUserId(userId);
       if(listofbookings!=null)
       {
        return listofbookings;
       }
       else{
        return null;
       }
    }

    @Override
    public List<Booking> getAllBookings() {
        List<Booking> listofbookings=bookingRepo.findAll();
        if(listofbookings!=null)
        {
            return listofbookings;
        }
        else{
            return null;
        }
    }

    @Override
    public Booking addBooking(Booking booking) {
        return bookingRepo.save(booking);
    }

    @Override
    public Boolean deleteBooking(Long id) {
        Optional<Booking> optionalbooking=bookingRepo.findById(id);
        if(optionalbooking.isPresent())
        {
            bookingRepo.deleteById(id);
            return true;
        }
        else{
            return false;
        }
    }

    @Override
    public Booking updateBookingStatus(Long id, String newStatus) {
        Booking booking=bookingRepo.findById(id).orElse(null);
        if(booking!=null)
        {
            booking.setStatus(newStatus);
            return bookingRepo.save(booking);
        }
        else{
            return null;
        }
    }

}