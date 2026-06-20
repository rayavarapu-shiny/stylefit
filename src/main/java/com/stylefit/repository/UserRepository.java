package com.stylefit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stylefit.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

}