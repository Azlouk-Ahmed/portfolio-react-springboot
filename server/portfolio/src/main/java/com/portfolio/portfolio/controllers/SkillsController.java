package com.portfolio.portfolio.controllers;


import com.portfolio.portfolio.Model.Projects;
import com.portfolio.portfolio.Model.Skills;
import com.portfolio.portfolio.repositories.SkillsRepo;
import com.portfolio.portfolio.serviceImpliment.SkillsImpliment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SkillsController {
    @Autowired
    private SkillsImpliment Sservice;
    @Autowired
    private SkillsRepo SkillsRepo;
    @GetMapping("/skills")
    public ResponseEntity<List<Skills>> getAllSkills(){
        List<Skills> Skills= Sservice.listAllSkills();
        return new ResponseEntity<>(Skills, HttpStatus.OK);
    }

    @PostMapping("/skills")
    public void addSkill(@RequestBody Skills skill){
        Sservice.addSkill(skill);
    }
    @DeleteMapping("/skills/delete/{skillID}")
    public void delSkillById(@PathVariable("skillID") Long id){
        Sservice.delSkillById(id);
    }
}
