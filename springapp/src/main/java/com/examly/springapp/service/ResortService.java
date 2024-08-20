package com.examly.springapp.service;



import java.util.List;

import com.examly.springapp.model.Resort;

public interface ResortService {

    public List<Resort> getAllResorts();
    public Resort addResort(Resort resort);
    public Resort updateResort(Long id, Resort resort);
    public boolean deleteResort(Long id);
    public Resort getResortById(Long id);

}