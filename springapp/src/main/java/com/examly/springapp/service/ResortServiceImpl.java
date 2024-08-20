package com.examly.springapp.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.ResortExistsException;
import com.examly.springapp.model.Resort;
import com.examly.springapp.repository.ResortRepo;
 
@Service
public class ResortServiceImpl implements ResortService{

    @Autowired
    ResortRepo resortRepo;

    @Override
    public List<Resort> getAllResorts() {
       return resortRepo.findAll();
    }

    @Override

    public Resort addResort(Resort resort) {
        Resort existingResort = resortRepo.findByresortName(resort.getResortName());
        if(existingResort != null){
            throw new ResortExistsException("Resort already exists!");
        }
        else{
            return resortRepo.save(resort);
        }
    }

    @Override
    public Resort updateResort(Long id, Resort resort) {
        Resort oldResort = null;
       if(resortRepo.existsById(id))
       {
            oldResort=resortRepo.findById(id).get();
            oldResort.setCapacity(resort.getCapacity());
            oldResort.setDescription(resort.getDescription());
            oldResort.setPrice(resort.getPrice());
            oldResort.setResortAvailableStatus(resort.getResortAvailableStatus());
            oldResort.setResortImageUrl(resort.getResortImageUrl());
            oldResort.setResortLocation(resort.getResortLocation());
            oldResort.setResortName(resort.getResortName());
            oldResort = resortRepo.save(oldResort);
       }
       return oldResort;
    }

    @Override
    public boolean deleteResort(Long id) {
        Optional<Resort> resortOptional = resortRepo.findById(id);
        if (resortOptional.isPresent()) {
            resortRepo.delete(resortOptional.get());
            return true;
        } else {
            return false;
        }
    }
    

    // public boolean deleteResort(Long id) {
    //     Resort resort = resortRepo.findById(id).orElse(null);
    //     if(resort!=null){
    //         resortRepo.delete(resort);
    //         return true;
    //     }else{
    //         return false;
    //     }
        
        // if(resortRepo.findById(id).isPresent())
        // {
        //     resortRepo.deleteById(id);
        //     return true;
        // }
        // else
        // {
        //     return false;
        // }
    // }

    @Override
    public Resort getResortById(Long id) {
       if(resortRepo.existsById(id))
       {
        return resortRepo.findById(id).get();
       }
       else{
        return null;
       }
    }
    
}