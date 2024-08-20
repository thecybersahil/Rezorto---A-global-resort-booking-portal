// package com.examly.springapp.controller;

// import org.springframework.web.bind.annotation.*;
// import org.springframework.web.multipart.MultipartFile;

// import com.examly.springapp.service.HotelService;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;


// @RestController
// @RequestMapping("api/resort")
// public class HotelController {

//     @Autowired
//     private HotelService hotelService;

//     @PostMapping
//     public ResponseEntity<String> updateHotel(@RequestParam("image") MultipartFile image,
//             @RequestParam("name") String name,@RequestParam("location") String location) 
//             {
//                 hotelService.updateHotel(image, name, location);
//                 return ResponseEntity.ok("Hotel details updated");
//             }
//         }

