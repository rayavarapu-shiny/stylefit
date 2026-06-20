package com.stylefit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.stylefit.model.Dress;
import com.stylefit.service.DressService;

@RestController
@RequestMapping("/api/dresses")
@CrossOrigin("*")
public class DressController {

    @Autowired
    private DressService dressService;

    @PostMapping
    public Dress addDress(@RequestBody Dress dress) {
        return dressService.addDress(dress);
    }

    @GetMapping
    public List<Dress> getAllDresses() {
        return dressService.getAllDresses();
    }
}