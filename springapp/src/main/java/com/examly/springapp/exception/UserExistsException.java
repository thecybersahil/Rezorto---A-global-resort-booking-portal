package com.examly.springapp.exception;

public class UserExistsException extends RuntimeException{
    public UserExistsException(String msg){
    super(msg);
    }
}
