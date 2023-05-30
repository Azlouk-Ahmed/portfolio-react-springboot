package com.portfolio.portfolio.controllers;


import com.portfolio.portfolio.Model.Projects;
import com.portfolio.portfolio.repositories.ProjectsRepo;
import com.portfolio.portfolio.serviceImpliment.ServiceImpliment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ProjectsController {
    @Autowired
    private ServiceImpliment Cservice;
    @Autowired
    private ProjectsRepo ProjectsRepo;
    @GetMapping("/projects")
    public ResponseEntity<List<Projects>> getAllProjects(){
        List<Projects> Categorys= Cservice.listAllProjects();
        return new ResponseEntity<>(Categorys, HttpStatus.OK);
    }
    @PostMapping("/projects")
    public void addProject(@RequestBody Projects proj){
        Cservice.addProj(proj);
    }
    @DeleteMapping("/delete/{projectID}")
    public void delProjById(@PathVariable("projectID") Long id){
        Cservice.delProjById(id);
    }

    @PutMapping("/UpdateProj/{projectID}")
    public ResponseEntity<Projects> updateProj(@PathVariable("projectID") long id,@RequestBody Projects proj){
        Optional<Projects> projj = ProjectsRepo.findById(id);
        if (projj.isPresent()){
            Projects project = projj.get();
            project.setProject_name(proj.getProject_name());
            project.setProject_description(proj.getProject_description());
            project.setProject_status(proj.getProject_status());
            project.setProject_image(proj.getProject_image());
            project.setProject_tools(proj.getProject_tools());
            return  new ResponseEntity<>(ProjectsRepo.save(project),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
