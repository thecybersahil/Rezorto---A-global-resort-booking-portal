package com.examly.springapp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.Booking;
import com.examly.springapp.service.BookingServiceImpl;

@RestController
public class BookingController {

    @Autowired
    BookingServiceImpl bookingServiceImpl;

    @PostMapping("/api/booking")
    public ResponseEntity<?> addBooking(@RequestBody Booking booking)
    {
        Booking addbooking=bookingServiceImpl.addBooking(booking);
        if(addbooking!=null)
        {
            return ResponseEntity.status(201).body(addbooking);
        }
        else{
            return ResponseEntity.status(500).body(null);

        }
    }

    @DeleteMapping("/api/booking/{bookingId}")
    public ResponseEntity<?> deleteBooking(@PathVariable Long bookingId)
    {
        boolean check=bookingServiceImpl.deleteBooking(bookingId);
        if(check)
        {
            return ResponseEntity.status(200).body(null);
        }
        else{
            return ResponseEntity.status(500).body(null);

        }
    }

    @GetMapping("/api/booking/user/{userId}")
    public ResponseEntity<?> getBookingsByUserId(@PathVariable Long userId)
    {
        List<Booking> listofbookings=bookingServiceImpl.getBookingsByUserId(userId);
        if(listofbookings!=null)
        {
            return ResponseEntity.status(200).body(listofbookings);
        }
        else{
            return ResponseEntity.status(500).body(null);

        }

    }

    @GetMapping(value="/api/booking",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllBookings()
    {
        List<Booking> listofbookings=bookingServiceImpl.getAllBookings();
        if(listofbookings!=null)
        {
            return ResponseEntity.status(200).body(listofbookings);
        }
        else{
            return ResponseEntity.status(500).body(null);
            
        }
    }

    @PutMapping("/api/booking/{bookingId}")
    public ResponseEntity<?> updateBookingStatus(@RequestBody Booking booking,@PathVariable Long bookingId )
    {
        Booking updatedbooking=bookingServiceImpl.updateBookingStatus(bookingId,booking.getStatus());
        if(updatedbooking!=null)
        {
            return ResponseEntity.status(200).body(updatedbooking);
        }
        else{
            return ResponseEntity.status(500).body(null);   
        }

    }

    @GetMapping("/api/booking/{bookingId}")
    public ResponseEntity<?> getBookingById(@PathVariable Long bookingId)
    {
        Booking booking=bookingServiceImpl.getBookingById(bookingId);
        if(booking!=null)
        {
            return ResponseEntity.status(200).body(booking);
        }
        else{
            return ResponseEntity.status(500).body(null);
            //return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }



}