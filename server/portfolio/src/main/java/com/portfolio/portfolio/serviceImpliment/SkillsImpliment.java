package com.portfolio.portfolio.serviceImpliment;

import com.portfolio.portfolio.Model.Projects;
import com.portfolio.portfolio.Model.Skills;
import com.portfolio.portfolio.repositories.SkillsRepo;
import com.portfolio.portfolio.service.SkillsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@Transactional
public class SkillsImpliment implements SkillsService {

    @Autowired
    private SkillsRepo repository;
    public List<Skills> listAllSkills(){
        return repository.findAll();
    }

    public void addSkill(Skills skill){
        repository.save(skill);
    }

    public void delSkillById(Long id){
        repository.deleteById(id);
    }
}
