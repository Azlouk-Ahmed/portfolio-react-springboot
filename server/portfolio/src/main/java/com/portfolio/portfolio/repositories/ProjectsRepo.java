package com.portfolio.portfolio.repositories;

import com.portfolio.portfolio.Model.Projects;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectsRepo extends JpaRepository <Projects , Long> {
}
