package com.examly.springapp.exception;

public class ResortExistsException extends RuntimeException{
    public ResortExistsException(String msg){
        super(msg);
    }
}
