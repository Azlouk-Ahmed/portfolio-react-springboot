package com.portfolio.portfolio.repositories;

import com.portfolio.portfolio.Model.Fun_facts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface funFactsRepo extends JpaRepository <Fun_facts,Long> {
}
