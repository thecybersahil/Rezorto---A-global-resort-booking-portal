// package com.examly.springapp.service;

// import org.springframework.beans.factory.annotation.Autowired;

// import org.springframework.stereotype.Service;
// import org.springframework.web.multipart.MultipartFile;

// import com.examly.springapp.model.Resort;
// import com.examly.springapp.repository.ResortRepo;

// import java.io.File;
// import java.io.IOException;
// import java.nio.file.Files;
// import java.nio.file.Path;
// import java.nio.file.Paths;

// @Service
// public class HotelService {

//     @Autowired
//     private ResortRepo resortRepo;

//     private static final String UPLOAD_DIR = "uploads/";

//     public void updateHotel(MultipartFile image, String name, String location) {
//         String imagePath = null;
//         if (image != null && !image.isEmpty()) {
//             try {
//                 // Ensure the upload directory exists
//                 File uploadDir = new File(UPLOAD_DIR);
//                 if (!uploadDir.exists()) {
//                     uploadDir.mkdirs();
//                 }

//                 // Save the image to the file system
//                 String originalFilename = image.getOriginalFilename();
//                 Path filePath = Paths.get(UPLOAD_DIR, originalFilename);
//                 Files.write(filePath, image.getBytes());
//                 imagePath = filePath.toString();
//             } catch (IOException e) {
//                 e.printStackTrace();
//                 // Handle the exception appropriately
//             }
//         }

//         // Update the hotel details in the database
//         Resort resort = new Resort();
//         resort.setResortName(name);
//         resort.setResortLocation(location);
//         resort.setResortImageUrl(imagePath); // Assuming Resort entity has an imagePath field
//         resortRepo.save(resort);
//     }
// }
