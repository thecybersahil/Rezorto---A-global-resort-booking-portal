package com.examly.springapp.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
import com.examly.springapp.model.*;
import com.examly.springapp.service.UserServiceImpl;
 
@RestController
@RequestMapping("/api/user")
// @CrossOrigin( origins = "https://8081-ecbfcbceefbabeaddecdfdbadefdaa.premiumproject.examly.io")
@CrossOrigin(origins ="*",allowedHeaders="*")
public class UserController {
   
    @Autowired
    private UserServiceImpl userServiceImpl;
    @CrossOrigin(origins ="*",allowedHeaders="*")
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userServiceImpl.registerUser(user));
    }
    @CrossOrigin(origins ="*",allowedHeaders="*")
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user){
        user = userServiceImpl.loginUser(user);
        if(user == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Invalid username and password");
        }else{
            return ResponseEntity.status(HttpStatus.OK).body("Login Successful");
        }
    }
    @CrossOrigin(origins ="*",allowedHeaders="*")
    @GetMapping("/user")
    public ResponseEntity<?> getAllUsers(){
        return ResponseEntity.status(HttpStatus.OK).body(userServiceImpl.getAllUser()); 
    }
 
 
 
}