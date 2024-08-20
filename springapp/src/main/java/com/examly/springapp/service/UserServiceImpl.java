package com.examly.springapp.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.UserExistsException;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepo userRepo;

    @Autowired
    PasswordEncoder encoder;
   // @Override

    // public User registerUser(User user) {
    //     user.setPassword(encoder.encode(user.getPassword()));
    //     return userRepo.save(user);
        
    // }

        @Override
        public User registerUser(User user){
      User existUser=userRepo.findByEmail(user.getEmail());
      if(existUser!=null){
        throw new UserExistsException("User Already Exists");
      }else{
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepo.save(user);
      }
    }

    @Override
    public User loginUser(User user) {
        return userRepo.findByEmail(user.getEmail());
    }

    public List<User> getAllUser(){
        return userRepo.findAll();
    }
    
}