package com.portfolio.portfolio.controllers;


import com.portfolio.portfolio.Model.Experiences;
import com.portfolio.portfolio.Model.Fun_facts;
import com.portfolio.portfolio.repositories.experienceRepo;
import com.portfolio.portfolio.repositories.funFactsRepo;
import com.portfolio.portfolio.serviceImpliment.experienceImpliment;
import com.portfolio.portfolio.serviceImpliment.funFactsImpliment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class experienceController {
    @Autowired
    private experienceImpliment Eservice;
    @Autowired
    private experienceRepo experienceRepo;

    @GetMapping("/experience")
    public ResponseEntity<List<Experiences>> listAllExperience(){
        List<Experiences> exL= Eservice.listAllExperience();
        return new ResponseEntity<>(exL, HttpStatus.OK);
    }

    @PostMapping("/experience")
    public void addExperience(@RequestBody Experiences ex){
        Eservice.addExperience(ex);
    }

    @DeleteMapping("/experience/delete/{ffID}")
    public void delExpById(@PathVariable("ffID") Long id){
        Eservice.delExpById(id);
    }
}
