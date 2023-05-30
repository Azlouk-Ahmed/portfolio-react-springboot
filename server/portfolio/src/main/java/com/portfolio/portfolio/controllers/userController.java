package com.portfolio.portfolio.controllers;


import com.portfolio.portfolio.Model.User;
import com.portfolio.portfolio.serviceImpliment.userServiceImpliment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class userController {

    @Autowired
    private userServiceImpliment Uservice;
    @Autowired
    private com.portfolio.portfolio.repositories.userRepo userRepo;
    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        User user = Uservice.getUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
