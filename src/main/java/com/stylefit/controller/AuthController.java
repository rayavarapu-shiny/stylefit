package com.stylefit.controller;
import com.stylefit.dto.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.stylefit.model.User;
import com.stylefit.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {

        return userService.register(user);

    }
    @PostMapping("/login")
public String login(@RequestBody LoginRequest request){

    boolean status = userService.login(
            request.getEmail(),
            request.getPassword());

    if(status){
        return "Login Successful";
    }

    return "Invalid Email or Password";
}

}