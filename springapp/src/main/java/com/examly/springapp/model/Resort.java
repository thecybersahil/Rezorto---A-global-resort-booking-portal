package com.examly.springapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Resort {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long resortId;
    String resortName;
    String resortImageUrl;
    String resortLocation;
    String resortAvailableStatus;
    long price;
    int capacity;
    String description;

    public Resort() {
    }

    public Long getResortId() {
        return resortId;
    }
    public void setResortId(Long resortId) {
        this.resortId = resortId;
    }
    public String getResortName() {
        return resortName;
    }
    public void setResortName(String resortName) {
        this.resortName = resortName;
    }
    public String getResortImageUrl() {
        return resortImageUrl;
    }
    public void setResortImageUrl(String resortImageUrl) {
        this.resortImageUrl = resortImageUrl;
    }
    public String getResortLocation() {
        return resortLocation;
    }
    public void setResortLocation(String resortLocation) {
        this.resortLocation = resortLocation;
    }
    public String getResortAvailableStatus() {
        return resortAvailableStatus;
    }
    public void setResortAvailableStatus(String resortAvailableStatus) {
        this.resortAvailableStatus = resortAvailableStatus;
    }
    public long getPrice() {
        return price;
    }
    public void setPrice(long price) {
        this.price = price;
    }
    public int getCapacity() {
        return capacity;
    }
    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    
}