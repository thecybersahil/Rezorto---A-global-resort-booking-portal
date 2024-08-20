package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Resort;
import com.examly.springapp.service.ResortServiceImpl;

@RestController
@RequestMapping("api/resort")
public class ResortController {
    @Autowired
    ResortServiceImpl resortServiceImpl;

    @PostMapping
    public ResponseEntity<?> addResort(@RequestBody Resort resort)
    {
        return ResponseEntity.status(201).body(resortServiceImpl.addResort(resort));
    }

    @GetMapping
    public ResponseEntity<?> getAllResorts()
    {
        List<Resort> resortsList = resortServiceImpl.getAllResorts();
        if (resortsList.isEmpty()) {
            System.out.println(resortsList);
            return ResponseEntity.status(500).body(null);
            // System.out.println("inside resort");
        }
        else{
            return ResponseEntity.status(200).body(resortsList);
            // System.out.println("outside resort");
        }
        
    }

    @GetMapping("/{resortId}")
    public ResponseEntity<?> getAllResortById(@PathVariable Long resortId)
    {   Resort resort = resortServiceImpl.getResortById(resortId);
        if(resort != null){
             return ResponseEntity.status(200).body(resort);
        }
        else{
            return ResponseEntity.status(500).body(null);
        }
    }

    @DeleteMapping("/{resortId}")
    public ResponseEntity<?> deleteResort(@PathVariable Long resortId)
    {
        boolean isResortDeleted = resortServiceImpl.deleteResort(resortId);
        if(isResortDeleted)
        {
            return ResponseEntity.status(200).body(null);
        }
        else
        {
           return ResponseEntity.status(500).body(null);
        }
    }

    @PutMapping("/{resortId}")
    public ResponseEntity<?> updateResort(@PathVariable Long resortId, @RequestBody Resort resort)
    {
        System.out.println(resort);
        Resort updatedResort = resortServiceImpl.updateResort(resortId, resort);
        if(updatedResort != null)
        {
            return ResponseEntity.status(200).body(updatedResort);
        }
        else
        {
            return ResponseEntity.status(500).body(null);
        }
    }
}