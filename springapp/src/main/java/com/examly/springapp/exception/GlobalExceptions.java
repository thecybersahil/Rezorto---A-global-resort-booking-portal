package com.examly.springapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptions{

    @ExceptionHandler(UserExistsException.class)
    @ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleUserNotFoundException(UserExistsException userExistsException){
        return userExistsException.getMessage();
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    @ResponseStatus(code = HttpStatus.NOT_FOUND)
    public String handleUsernameNotFoundException(UsernameNotFoundException usernameNotFoundException){
        return usernameNotFoundException.getMessage();
    }

    @ExceptionHandler(ResortExistsException.class)
    @ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleResortExistsException(ResortExistsException resortExistsException){
        return resortExistsException.getMessage();
    }

}
