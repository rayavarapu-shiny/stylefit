package com.stylefit.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stylefit.dto.TryOnRequest;
import com.stylefit.service.TryOnService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TryOnController {

    private final TryOnService service;

    public TryOnController(TryOnService service) {
        this.service = service;
    }

    @PostMapping("/tryon")
    public String tryOn(@RequestBody TryOnRequest request) {

        return service.tryOn(
                request.getUserImage(),
                request.getDressImage());
    }
}