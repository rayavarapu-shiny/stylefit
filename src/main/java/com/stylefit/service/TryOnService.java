package com.stylefit.service;

import org.springframework.stereotype.Service;

@Service
public class TryOnService {

    public String tryOn(String userImage, String dressImage) {

        return "http://localhost:5173/result/result1.jpg";

    }

}