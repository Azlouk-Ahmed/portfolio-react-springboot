package com.portfolio.portfolio.repositories;

import com.portfolio.portfolio.Model.Experiences;
import org.springframework.data.jpa.repository.JpaRepository;

public interface experienceRepo extends JpaRepository <Experiences ,Long> {
}
