package com.portfolio.portfolio.serviceImpliment;

import com.portfolio.portfolio.Model.User;
import com.portfolio.portfolio.repositories.userRepo;
import com.portfolio.portfolio.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional
public class userServiceImpliment implements userService {
    @Autowired
    private userRepo repository;

    public User getUserById(long id){
        return repository.findById(id).get();
    }
}
