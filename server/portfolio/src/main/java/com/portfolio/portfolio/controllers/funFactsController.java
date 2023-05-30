package com.portfolio.portfolio.controllers;

import com.portfolio.portfolio.Model.Fun_facts;
import com.portfolio.portfolio.repositories.funFactsRepo;
import com.portfolio.portfolio.serviceImpliment.funFactsImpliment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class funFactsController {
    @Autowired
    private funFactsImpliment Fservice;
    @Autowired
    private funFactsRepo funFactsRepo;
    @GetMapping("/funfacts")
    public ResponseEntity<List<Fun_facts>> listAllFunFacts(){
        List<Fun_facts> funFactsList= Fservice.listAllFunFacts();
        return new ResponseEntity<>(funFactsList, HttpStatus.OK);
    }
    @PostMapping("/funfacts")
    public void addFunFact(@RequestBody Fun_facts ff){
        Fservice.addFunFact(ff);
    }

    @PutMapping("/updatefunfact/{ff_ID}")
    public ResponseEntity<Fun_facts> updateFunFact(@PathVariable("ff_ID") long id,@RequestBody Fun_facts funFact){
        Optional<Fun_facts> ff = funFactsRepo.findById(id);
        if (ff.isPresent()){
            Fun_facts funF = ff.get();
            funF.setFact_desc(funFact.getFact_desc());
            return  new ResponseEntity<>(funFactsRepo.save(funF),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/funfact/delete/{ffID}")
    public void delFunFactById(@PathVariable("ffID") Long id){
        Fservice.delFunFactById(id);
    }

}
