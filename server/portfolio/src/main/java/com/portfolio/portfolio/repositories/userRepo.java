package com.portfolio.portfolio.repositories;

import com.portfolio.portfolio.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<User, Long> {
}
