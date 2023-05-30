package com.portfolio.portfolio.serviceImpliment;

import com.portfolio.portfolio.Model.Fun_facts;
import com.portfolio.portfolio.repositories.funFactsRepo;
import com.portfolio.portfolio.service.funFactsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class funFactsImpliment implements funFactsService {
    @Autowired
    private funFactsRepo repository;
    public List<Fun_facts> listAllFunFacts(){
        return repository.findAll();
    }
    public void addFunFact(Fun_facts funFacts){
        repository.save(funFacts);
    }
    public void delFunFactById(Long id){
        repository.deleteById(id);
    }
}
