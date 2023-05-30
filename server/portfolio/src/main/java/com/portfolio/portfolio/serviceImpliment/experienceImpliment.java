package com.portfolio.portfolio.serviceImpliment;


import com.portfolio.portfolio.Model.Experiences;
import com.portfolio.portfolio.Model.Fun_facts;
import com.portfolio.portfolio.repositories.experienceRepo;
import com.portfolio.portfolio.service.experienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class experienceImpliment implements experienceService {
    @Autowired
    private experienceRepo repository;
    public List<Experiences> listAllExperience(){
        return repository.findAll();
    }

    public void addExperience(Experiences experience){
        repository.save(experience);
    }

    public void delExpById(Long id){
        repository.deleteById(id);
    }
}
