package com.stylefit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stylefit.model.Dress;
import com.stylefit.repository.DressRepository;

@Service
public class DressService {

    @Autowired
    private DressRepository dressRepository;

    public Dress addDress(Dress dress) {
        return dressRepository.save(dress);
    }

    public List<Dress> getAllDresses() {
        return dressRepository.findAll();
    }
}