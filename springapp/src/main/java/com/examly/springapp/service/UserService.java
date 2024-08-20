package com.examly.springapp.service;

import com.examly.springapp.model.User;

public interface UserService {
    User registerUser(User user);
    User loginUser(User user);
}
