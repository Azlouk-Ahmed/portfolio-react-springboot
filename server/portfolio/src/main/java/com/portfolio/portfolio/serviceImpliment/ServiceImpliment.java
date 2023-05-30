package com.portfolio.portfolio.serviceImpliment;


import com.portfolio.portfolio.Model.Projects;
import com.portfolio.portfolio.repositories.ProjectsRepo;
import com.portfolio.portfolio.service.ProjectsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ServiceImpliment implements ProjectsService {
    @Autowired
    private ProjectsRepo repository;
    public List<Projects> listAllProjects(){
        return repository.findAll();
    }
    public void addProj(Projects project){
        repository.save(project);
    }
    public void delProjById(Long id){
        repository.deleteById(id);
    }

}
